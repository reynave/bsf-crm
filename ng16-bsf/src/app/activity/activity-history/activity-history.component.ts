import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-activity-history',
  templateUrl: './activity-history.component.html',
  styleUrls: ['./activity-history.component.css']
})
export class ActivityHistoryComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  items : any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService,
  ){ }

  ngOnInit(){
    this.httpGet();
  }
  back(){
    history.back();
  }
  httpGet(){  
    this.http.get<any>(this.api + this.configService.getAppCode()+'activities/index', {
      headers : this.configService.headers(),
    }).subscribe(
      data => {
        this.loading = false;
        this.items = data['items'];
        console.log(data); 
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

  fnAdd(){
    const body ={
      insert : true,
      user : this.configService.account()
    }
    this.http.post<any>(this.api + this.configService.getAppCode()+'activities/fnAdd', body, {
      headers : this.configService.headers(),
    }).subscribe(
      data => {
        this.loading = false; 
        this.router.navigate(['activity/detail',data['post']['user']['account']['id']]);
        console.log(data); 
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }
}
