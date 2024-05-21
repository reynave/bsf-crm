import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { NgZone } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';  
import { FuncService } from 'src/app/service/func.services';

declare let navigator: any;
declare let Camera: any;

export class Model {
  constructor(
    public x_activity_type_id: string,
    public x_note: string,
    public x_summary: string,
    public x_visit_reason: string,
    public x_not_visit_reason: string,

  ) { }

}

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  today : string = '';;  expired : boolean = false;
  ar : any = [];
  totalAR : number = 0;
  model: any = new Model("", "", "", "", "");
  id: string = "";
  item: any = [];
  active = 1;
  geoData: any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private configService: ConfigService,
    private ngZone: NgZone,
    private modalService: NgbModal,
    public funcService : FuncService,
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.today = this.funcService.formatDate();
    this.httpGet();
   

  }

  httpGet() {
    this.modalService.dismissAll();
    this.loading = true;
    this.http.get<any>(this.api + this.configService.getAppCode()+'activities/detail/' + this.id, {
      headers: this.configService.headers(),
    }).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.item = data['item'];
        this.ar = data['ar'];
        this.totalAR = data['totalAR'];
        this.model.x_activity_type_id = data['item']['x_activity_type_id'];
        this.model.x_note = data['item']['x_note'];
        this.model.x_summary = data['item']['x_summary'];

        console.log(this.today, this.item['x_schedule_date']);
        if( Date.parse(this.today) > Date.parse(this.item['x_schedule_date']) ){
         
          this.expired = true;
        }

       // console.log('Epoch ',Date.parse(this.today) , Date.parse(this.item['x_schedule_date']))
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }
 
  remove() {
    const body = {
      id: this.id,
      model: this.model
    }
    if (confirm("is not visit this activity?")) {
      this.http.post<any>(this.api + this.configService.getAppCode()+'activities/remove', body, {
        headers: this.configService.headers(),
      }).subscribe(
        data => {
          this.modalService.dismissAll();
          console.log(data);
          history.back();
        },
        e => {
          console.log(e);
          this.note = "Error Server!";
        },
      );
    }
  }

  checkIn() {
    const body = {
      id: this.id,
      model: this.model,
      geoData: this.geoData,
    }
    console.log(body);
    this.http.post<any>(this.api + this.configService.getAppCode()+'activities/checkIn', body, {
      headers: this.configService.headers(),
    }).subscribe(
      data => {
        console.log(data);
        if (environment.cam === true) {
        //  this.takePhoto();
        }

        this.httpGet();
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

 
  getGeo() {
    if (environment.cam == true) { 
      let self = this;
      var onSuccess = function (position: any) {
        console.log('Latitude: ' + position.coords.latitude + '\n' +
          'Longitude: ' + position.coords.longitude + '\n' +
          'Altitude: ' + position.coords.altitude + '\n');
        self.geoData = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
          timestamp: position.timestamp,
        };
        if (self.item.x_activity_status == 'OPEN') {
          self.checkIn();
        } else {
          self.checkOut();
        }

      };

      function onError(error: any) {
        console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
        //self.checkIn();
        alert("GPS ERROR, PLEASE SET PERMISSION!");
      }
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
      this.geoData = {
        lat: 0,
        long: 0,
        timestamp:0,
      };
      if (this.item.x_activity_status == 'OPEN') {
        this.checkIn();
      } else {
        this.checkOut();
      }
    }
  }

  back() {
    history.back();
  }



  checkOut_DEL() {
    const body = {
      id: this.id,
      model: this.model,
      geoData: this.geoData
    }
    console.log(body);
    this.http.post<any>(this.api + this.configService.getAppCode()+'activities/checkOut', body, {
      headers: this.configService.headers(),
    }).subscribe(
      data => {
        console.log(data);
        if (environment.cam === true) {
          this.takePhoto();
        }
        this.httpGet();
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

  checkOut() {
    if (environment.cam === true) {
      this.takePhoto();
    }else{
      this.httpCheckOut();
    }
  }

  httpCheckOut(){
    const body = {
      id: this.id,
      model: this.model,
      geoData: this.geoData
    }
    console.log(body);
    this.http.post<any>(this.api + this.configService.getAppCode()+'activities/checkOut', body, {
      headers: this.configService.headers(),
    }).subscribe(
      data => {
        console.log(data);
        this.modalService.dismissAll();
        this.httpGet();
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

  images: string = "";
  initPhoto: boolean = false;
  takePhoto() {
    const options = {
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 50,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true,
    };
    let self = this;

    navigator.camera.getPicture(this.cameraSuccess, this.cameraError, options);

  }



  cameraSuccess = (imagesData: any) => {
    this.initPhoto = true;
    this.loading = false;
    this.ngZone.run(() => {
      this.images = 'data:image/png;base64,' + imagesData;
      console.log(imagesData);
      if(imagesData.length < 20){
        alert("No photo");
        console.log("belum ambil photo");
      }else{
        this.saveImages()
      }
     
    });

  }

  cameraError = (e: any) => {
    console.log('error Camera', e);
    this.initPhoto = false;
    this.modalService.dismissAll();
  }

  saveImages() {
    // this.initPhoto = true;
    if (this.initPhoto == true) {
      this.loading = true;
      const body = {
        id: this.id,
        base64Images: this.images,
        status: this.item.x_activity_status
        //base64Images : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADj0lEQVR4nO2XXUhTYRjHX7woqPuu6s4+2ZVu03AaarqJ84M0SKICi6ACiYgsMEtUsgaBTILa2Xaim0xNc1Zgku6sD/NrfpsfQzMhsek0O7tx2xPvu7mdLbedHS266IU/55znPef9/57n/WBD6F9sOrFxjzbWeJaKNRVTYlMhfv4rxtXRr7ZTYkZNiRkHJWaAI/ysxv3hxsjqXY5W9q9cwdeIzG8hiKLERoNGwoC2dALoYRbo707QD7Ggq7QAjlMSphm/F2ocpXllSmleAaV5eSIiAE2s8QzOVvdoFmibC+jPdtDVz7vvbS7QP5xdr8apMACwrsgApMwHKr/HSS+6DXXqGaCkjBcAx7X5PWBIawHXtXI/OfPOgVOWQ8QFcMiy29cScrJ4AWilDKursngNddXTJGO91emL3bEAHd/hD1B0E5xHjhFzq0ThB2CVKtxgCdmVEQPoa7+5S17QB/So3QcQ1w7Ok5fcwpl7zLFGRYlw4uUIMS9oGYZRUZK3b02Wq+Q3BUsuH4RhASh5J+jr5gHHtfndYIh/6h00ULgCmpg0KL1QBpqYo7AokXP734auQKzpNFmEj+d8886Rjp4jFZk4fD0oAIGQKmBMlBRoDg5Zzo/w21DCNGMTbck40IMs0AtOctVWTOEtCK3xenDIckMChFLYdfDs0PA2SmyspuJM3EMIKKkJbhSPQXb3st8i4yu58QukGAb4b8uKbhuotLNw+54FLtZMw/F262+DpndZ4WDjIJG8yxo0ltE5D8lNvUS8AcosLKhm7HB1/GfQrA48HwB0t4EI3weLyTtmhAFMsg4YWnVsGiC9Y1oYwLTdAeNscABc4v0N/UTr5d4o9scAlDwlGGCCdcCgZwokrRaIUjUSSVstEcUEA6hm7HB+dJUMsq/e7J1bfB9JTBBAyRQLhSNucywpN7M3lohiggCUm5z3Ta8BpcBDZ8sA8joXXEL2/EZKa5sk5hl1H128AYpeDNi2AiCz2wrJzWYCUKh5vcwbQK1uLOd16NT3wd4n7yClbZIcuVyRzD3mWFVV+vC/iritUt/2PtTiyuy1QUrLoNcglIrv13YiIe1BTWPZ5ab+pcA1gaUwfQ1pKq//5MJljzjz/y2g7UQI4f+FIoSQBCGUiBBKRQjJEUIKfGR4JPco1fOOxPMN/nYHEth2cQw2KzyWoIbpd3MqIEMIpXAyDqwA7sPvrFcAfxuyAr8A50v6ENvkmUMAAAAASUVORK5CYII="
      }
      console.log(body);
      this.http.post<any>(this.api + this.configService.getAppCode()+'activities/takePhoto', body, {
        headers: this.configService.headers(),
      }).subscribe(
        data => {
          console.log(data);
          this.loading = false;
         this.httpCheckOut();
         
        },
        e => {
          console.log(e);
          this.note = "Error Server!";
        },
      );
    }
  }


  openFullscreen(content: any) {
    this.modalService.open(content, { fullscreen: true });
  }



  takeOrder(x: any = []) {
    let objCustomer: any = [];
    objCustomer = {
      x_customer_id : this.item.x_customer_id,
    }

    this.router.navigate(['product'], {queryParams:objCustomer});
   
  }
}
