import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-ngx-webcam',
  templateUrl: './ngx-webcam.component.html',
  styleUrls: ['./ngx-webcam.component.css']
})
export class NgxWebcamComponent implements OnInit {

  public webcamImage: WebcamImage | null = null;
  public trigger: Subject<void> = new Subject<void>();
  public switchCamera: Subject<boolean> = new Subject<boolean>();

  public deviceId: string = '';
  public availableCameras: MediaDeviceInfo[] = [];

  constructor(
    private http: HttpClient,
    
  ) { }

  back() {
    history.back();
   }

  ngOnInit(): void {
    // Dapatkan daftar kamera yang tersedia
    WebcamUtil.getAvailableVideoInputs().then((mediaDevices: MediaDeviceInfo[]) => {
      this.availableCameras = mediaDevices;
      // Pilih kamera depan atau belakang
      if (this.availableCameras.length > 0) {
        this.deviceId = this.availableCameras[0].deviceId; // Default kamera pertama
      }
    });
  }

  /**
   *  DOC PLEASE READ :
   * https://www.npmjs.com/package/ngx-webcam
   */

  warning : string = '';
  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      this.warning = "Camera access was not allowed by user!";
      console.warn(this.warning);
      
    }else{
      this.warning = '';
    }
  }


  // Fungsi untuk trigger kamera dan menangkap foto
  public triggerSnapshot(): void {
    this.trigger.next();
    
  }

  // Observable untuk trigger snapshot
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  // Observable untuk ganti kamera
  public get switchCameraObservable(): Observable<boolean> {
    return this.switchCamera.asObservable();
  }

  // Fungsi untuk menangani gambar yang diambil
  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    console.log('Gambar diambil:', webcamImage);
    this.sendImageToServer(webcamImage['imageAsDataUrl']);
  }

  // Fungsi untuk mengganti kamera (depan/belakang)
  public changeCamera(): void {
    if (this.availableCameras.length > 1) {
      const currentIndex = this.availableCameras.findIndex(camera => camera.deviceId === this.deviceId);
      // Pilih kamera berikutnya (depan/belakang)
      const nextIndex = (currentIndex + 1) % this.availableCameras.length;
      this.deviceId = this.availableCameras[nextIndex].deviceId;
    }
  }
  public uploadMessage: string = ''; // Menyimpan status upload

   // Fungsi untuk mengirim gambar ke server
   public sendImageToServer(_imageAsDataUrl : string): void {
    if (this.webcamImage) {
      const base64Image = this.webcamImage.imageAsBase64;
      const imageData = { image: `data:image/png;base64,${base64Image}` }; // Format base64
      const body = {
        id: '',
        base64Images: _imageAsDataUrl,
        status: ''
        //base64Images : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADj0lEQVR4nO2XXUhTYRjHX7woqPuu6s4+2ZVu03AaarqJ84M0SKICi6ACiYgsMEtUsgaBTILa2Xaim0xNc1Zgku6sD/NrfpsfQzMhsek0O7tx2xPvu7mdLbedHS266IU/55znPef9/57n/WBD6F9sOrFxjzbWeJaKNRVTYlMhfv4rxtXRr7ZTYkZNiRkHJWaAI/ysxv3hxsjqXY5W9q9cwdeIzG8hiKLERoNGwoC2dALoYRbo707QD7Ggq7QAjlMSphm/F2ocpXllSmleAaV5eSIiAE2s8QzOVvdoFmibC+jPdtDVz7vvbS7QP5xdr8apMACwrsgApMwHKr/HSS+6DXXqGaCkjBcAx7X5PWBIawHXtXI/OfPOgVOWQ8QFcMiy29cScrJ4AWilDKursngNddXTJGO91emL3bEAHd/hD1B0E5xHjhFzq0ThB2CVKtxgCdmVEQPoa7+5S17QB/So3QcQ1w7Ok5fcwpl7zLFGRYlw4uUIMS9oGYZRUZK3b02Wq+Q3BUsuH4RhASh5J+jr5gHHtfndYIh/6h00ULgCmpg0KL1QBpqYo7AokXP734auQKzpNFmEj+d8886Rjp4jFZk4fD0oAIGQKmBMlBRoDg5Zzo/w21DCNGMTbck40IMs0AtOctVWTOEtCK3xenDIckMChFLYdfDs0PA2SmyspuJM3EMIKKkJbhSPQXb3st8i4yu58QukGAb4b8uKbhuotLNw+54FLtZMw/F262+DpndZ4WDjIJG8yxo0ltE5D8lNvUS8AcosLKhm7HB1/GfQrA48HwB0t4EI3weLyTtmhAFMsg4YWnVsGiC9Y1oYwLTdAeNscABc4v0N/UTr5d4o9scAlDwlGGCCdcCgZwokrRaIUjUSSVstEcUEA6hm7HB+dJUMsq/e7J1bfB9JTBBAyRQLhSNucywpN7M3lohiggCUm5z3Ta8BpcBDZ8sA8joXXEL2/EZKa5sk5hl1H128AYpeDNi2AiCz2wrJzWYCUKh5vcwbQK1uLOd16NT3wd4n7yClbZIcuVyRzD3mWFVV+vC/iritUt/2PtTiyuy1QUrLoNcglIrv13YiIe1BTWPZ5ab+pcA1gaUwfQ1pKq//5MJljzjz/y2g7UQI4f+FIoSQBCGUiBBKRQjJEUIKfGR4JPco1fOOxPMN/nYHEth2cQw2KzyWoIbpd3MqIEMIpXAyDqwA7sPvrFcAfxuyAr8A50v6ENvkmUMAAAAASUVORK5CYII="
      }
      console.log(body); 
      // Kirim POST request ke server
      // this.http.post<any>('https://your-server-endpoint.com/upload', imageData)
      //   .subscribe(response => {
      //     this.uploadMessage = 'Gambar berhasil diupload!';
      //     console.log('Response server: ', response);
      //   }, error => {
      //     this.uploadMessage = 'Gagal mengupload gambar!';
      //     console.error('Error uploading: ', error);
      //   });
      this.uploadMessage = 'Gambar berhasil gambar yang diambil!  \n\n'+_imageAsDataUrl;
    } else {
      this.uploadMessage = 'Tidak ada gambar yang diambil!';
    }
  }
}
