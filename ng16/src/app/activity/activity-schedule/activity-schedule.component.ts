import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'; 
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

export class Model { 
  constructor( 
    public x_route_id: string,
    public x_name: string, 
    public x_schedule_date: any, 
    
  ) {} 
}

@Component({
  selector: 'app-activity-schedule',
  templateUrl: './activity-schedule.component.html',
  styleUrls: ['./activity-schedule.component.css']
})
export class ActivityScheduleComponent implements OnInit {
  date = new Date();
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  model  : any = new Model("","",this.date.getFullYear()+'-'+("0" + (this.date.getMonth() + 1)).slice(-2)+'-'+this.date.getDate() );
  id : string = "";
  item : any = []; 
  x_route :any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute : ActivatedRoute,
    private configService: ConfigService,
  ){

  }
  ngOnInit(): void {
    this.selectActivitySchedule();
  }
  selectActivitySchedule(){  
    this.http.get<any>(this.api + 'activities/selectActivitySchedule', {
      headers : this.configService.headers(),
    }).subscribe(
      data => { 
        console.log(data);  
        this.x_route  = data['x_route'];
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }
  
  onSubmit(){
    const body = {
      model : this.model, 
    }

    this.http.post<any>(this.api + 'activities/createActivitySchedule',body, {
      headers : this.configService.headers(),
    }).subscribe(
      data => { 
        console.log(data);  
        history.back();
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

  back(){
    history.back();
  }

}
