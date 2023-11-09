import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service'; 
import { NgZone } from '@angular/core';


declare let navigator: any;
declare let Camera: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  env : any = environment;
  gpsInfo : any = [];
  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private ngZone: NgZone, 
  ){ }

  ngOnInit()  {
     console.log(this.config.account());
  }
  callApi(){
    //http://systemapk.bsfar.com:41021/api-dev/v1/
    this.http.get<any>(environment.api+this.config.getAppCode()).subscribe(
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
  gps(){
    console.log("GEO is :");
    let self = this;
    var onSuccess = function (position : any) {
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
              lat :  position.coords.latitude,
              long : position.coords.longitude,
              timestamp : position.timestamp, 
            } ;
    };

    // onError Callback receives a PositionError object
    //
    function onError(error : any ) {
        console.log('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
 
  cam(){
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
    console.log("cameraSuccess : ",imagesData);
    this.ngZone.run(() => {
       console.log('data:image/png;base64,' + imagesData);
    }); 
  }

  cameraError = (e: any) => {
    this.note = 'Error Camera ';
    console.log('error Camera', e); 
  }

  note : string = "";
  portal1(){
    this.http.get<any>(environment.api+"bsf-portal/index.php/mobile_api/product").subscribe(
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
}
