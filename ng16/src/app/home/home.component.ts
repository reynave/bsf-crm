import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { NgZone } from '@angular/core'; 


declare let navigator: any;
declare let Camera: any;
declare let moduleTarget : boolean;
declare let  moduleKomisi  : boolean;
declare let  moduleReportCustomer  : boolean;
declare let  moduleApproval  : boolean;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  itemsMessage : any = [];
  env: any = environment;
  gpsInfo: any = [];
  note: string = "";
  api: string = environment.api;
  clock: any = {
    clickIn: "loading...",
    clickOut: "loading...",
  }
  timer: any;
  
moduleTarget : boolean = moduleTarget;
moduleKomisi : boolean = moduleKomisi;
moduleReportCustomer : boolean = moduleReportCustomer;
moduleApproval : boolean = moduleApproval;
  
  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private ngZone: NgZone,
    private router: Router,

  ) { }

  ngOnInit() {
    console.log(this.config.account());
    this.getClockDate();

    this.timer = setInterval(() => {
      this.getClockDate();
    }, 1000 * 60 * 60);

    this.httpMessage()
  }

  httpMessage(){ 
    this.http.get<any>(this.api + this.config.getAppCode() + "Message/index", {
      headers: this.config.headers(),
    }).subscribe(
      data => {
       this.itemsMessage = data['items'];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }

  ngxWebCame() {
    this.router.navigate(['./ngxWebcam']);
  }
  getClockDate() {
    console.log("runing");
    this.http.get<any>(this.api + this.config.getAppCode() + "Attendance/today", {
      headers: this.config.headers(),
    }).subscribe(
      data => {
        this.clock['clickIn'] = data['items']['x_clock_in'];
        this.clock['clickOut'] = data['items']['x_clock_out'];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
 
  callApi() {
    //http://systemapk.bsfar.com:41021/api-dev/v1/
    this.http.get<any>(environment.api + this.config.getAppCode()).subscribe(
      data => {
        console.log(data);
        this.note = "Call Success ";
      },
      e => {
        console.log(e);
        this.note = "Error";
      },
    );
  }

  gps() {
    console.log("GEO is :");
    let self = this;
    var onSuccess = function (position: any) {
      self.note = "GPS Success ";
      console.log('Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n' +
        'Altitude: ' + position.coords.altitude + '\n' +
        'Accuracy: ' + position.coords.accuracy + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.timestamp + '\n');
      self.gpsInfo = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
        timestamp: position.timestamp,
      };
    };

    // onError Callback receives a PositionError object
    //
    function onError(error: any) {
      console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }

  cam() {
    const options = {
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true,
    };
    let self = this;
    navigator.camera.getPicture(this.cameraSuccess, this.cameraError, options);
  }
  cameraSuccess = (imagesData: any) => {
    console.log("cameraSuccess : ", imagesData);
    this.ngZone.run(() => {
      console.log('data:image/png;base64,' + imagesData);
    });
  }

  cameraError = (e: any) => {
    this.note = 'Error Camera ';
    console.log('error Camera', e);
  }

  portal1() {
    this.http.get<any>(environment.api + "bsf-portal/index.php/mobile_api/product").subscribe(
      data => {
        console.log(data);
        this.note = "Success";
      },
      e => {
        console.log(e);
        this.note = "Error";
      },
    );
  }

  clockIn() {
    const body = {
      error: false,
    }
    this.http.post<any>(this.api + this.config.getAppCode() + "Attendance/clockIn", body, {
      headers: this.config.headers(),
    }).subscribe(
      data => {
        console.log(data);
        this.getClockDate();
      },
      error => {
        console.log(error);
      }
    )
  }
  clockOut() {
    const body = {
      error: false,
    }
    this.http.post<any>(this.api + this.config.getAppCode() + "Attendance/clockOut", body, {
      headers: this.config.headers(),
    }).subscribe(
      data => {
        console.log(data);
        this.getClockDate();
      },
      error => {
        console.log(error);
      }
    )
  }
}
