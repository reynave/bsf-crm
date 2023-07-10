import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-schedule-activities',
  templateUrl: './schedule-activities.component.html',
  styleUrls: ['./schedule-activities.component.css']
})
export class ScheduleActivitiesComponent implements OnInit { 
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  items : any = [];
  noteSelect : string  = "Today";
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
  httpGet(data : any = []){  
    this.http.get<any>(this.api + 'activities/schedules', {
      headers : this.configService.headers(),
      params : data,
    }).subscribe(
      data => {
        this.loading = false;
        this.items = data['items'];
        console.log(data); 
        this.noteSelect  = data['noteSelect'];
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
    this.http.post<any>(this.api + 'activities/fnAdd', body, {
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

  selectDate : string = "0";
  updateDate(){
    console.log(this.selectDate);
    const body = {
      selectDate : this.selectDate,
      type : 'range',
    } 
    this.httpGet(body);
    // this.router.navigate(['scheduleAcivities'],{queryParams:body}).then(
    //   ()=>{
       
    //   }
    // )
  }
}

