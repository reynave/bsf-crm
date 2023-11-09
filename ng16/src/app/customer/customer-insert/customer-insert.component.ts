import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { environment } from 'src/environments/environment';

class Hero {
  constructor(
    public  x_customersequence: string,
    public  name: string,
    public  x_short_name: string,
    public  x_customertype: string,
    public  phone: string,
    public  email: string,
    public  x_ktp: string,
    public  l10n_id_pkp: string,
    public  x_npwp: string,
    public  x_alamat_npwp: string,
    public  vat: string,
    public  x_pbf: string,
    public  x_is_bsf_group: string,
    public  x_aks: string,
    public  x_cabangutama: string,
    public  x_cabangpembantu: string,
    public  street: string,
    public  x_kodeareaid: string,
    public  x_kodearea: string,
    public  x_namaarea: string,
    public  x_wilayah: string,
    public  x_kodewilayah: string,
    public  x_provinsi: string,
    public  x_kecamatan: string,
    public  x_kabupaten: string,
    public  x_salesman: string,
    public  x_collector: string,
    public  x_delivery: string,
) {  }
}

@Component({
  selector: 'app-customer-insert',
  templateUrl: './customer-insert.component.html',
  styleUrls: ['./customer-insert.component.css']
})
 
export class CustomerInsertComponent {
  note: string = "";
  gpsInfo: any = [];

  model = new Hero('','','','','','','','','','','','','','','','','','','','','','','','','','','','');

  constructor(
    private http: HttpClient,
    private configService : ConfigService, 
    private activeRouter : ActivatedRoute,  
  ){}

  onSubmit(){
    console.log(this.model);
    this.http.post(environment.api+this.configService.getAppCode()+"Res_partner/onSubmit",this.model,{
      headers:this.configService.headers(),
    }).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }


  back() {
    history.back();
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
}
