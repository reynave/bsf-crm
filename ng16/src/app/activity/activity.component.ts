import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit { 
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  items : any = [];
  id : string = "";
  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService,
    private activeRouter: ActivatedRoute,
  ){ }

  ngOnInit(){
    this.id = this.activeRouter.snapshot.queryParams['id'];
    this.httpGet();
  }
  back(){
    history.back();
  }
  httpGet(){  
    console.log(this.activeRouter.snapshot.queryParams);
    this.http.get<any>(this.api + 'activities/index', {
      headers : this.configService.headers(),
      params : this.activeRouter.snapshot.queryParams
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

  fnRemove(x :any){ 
    const body ={ 
      item : x
    }
    if(confirm("Delete this activity?")){
      this.http.post<any>(this.api + 'activities/fnRemove', body, {
        headers : this.configService.headers(),
      }).subscribe(
        data => {
          this.loading = false;  
          this.httpGet();
        },
        e => {
          console.log(e);
          this.note = "Error Server!";
        },
      );
    }
  }
}
