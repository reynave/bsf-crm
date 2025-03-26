import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  itemsMessage: any = [];
  loading: boolean = false;
  
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {
  }

  ngOnInit(): void {
    this.monthlySelect(); 
  }
  monthlySelect() {
    this.http.get<any>(environment.api + this.configService.getAppCode() + "Message/history", {
      headers: this.configService.headers(),
      params: {}
    }).subscribe(
      data => {
        console.log(data); 
        this.itemsMessage = data['items'];
      },
      error => {
        console.log(error);
      }
    )
  }

  
  back() {
    history.back();
  }
}
