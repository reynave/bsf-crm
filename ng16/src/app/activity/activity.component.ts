import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { FuncService } from '../service/func.services';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  items: any = [];
  itemsLock : any = [];
  id: string = "";
  today : string = '';  expired : boolean = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService,
    private activeRouter: ActivatedRoute,
    public funcService : FuncService,
  ) { }

  ngOnInit() {
    this.today = this.funcService.formatDate();
    this.id = this.activeRouter.snapshot.queryParams['id'];
    this.httpGet();
  }

  back() {
    history.back();
  }

  httpGet() {
    this.loading = true;
    console.log(this.activeRouter.snapshot.queryParams);
    this.http.get<any>(this.api + this.configService.getAppCode() + 'activities/index', {
      headers: this.configService.headers(),
      params: this.activeRouter.snapshot.queryParams
    }).subscribe(
      data => {
        this.loading = false;
        this.items = data['items'];
        this.itemsLock = data['itemsLock'];
        console.log(data);
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

  fnAdd() {
    const body = {
      insert: true,
      user: this.configService.account()
    }
    this.http.post<any>(this.api + this.configService.getAppCode() + 'activities/fnAdd', body, {
      headers: this.configService.headers(),
    }).subscribe(
      data => {
        this.loading = false;
        this.router.navigate(['activity/detail', data['post']['user']['account']['id']]);
        console.log(data);
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

  fnRemove(x: any) {
    const body = {
      item: x
    }
    if (confirm("Delete this activity?")) {
      this.http.post<any>(this.api + this.configService.getAppCode() + 'activities/fnRemove', body, {
        headers: this.configService.headers(),
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

  fnCancelActiviesSchedule() {
    const body = {
      id: this.id,
    }

    if (confirm("Cancel this activities schedule ? ")) { 
      this.http.post<any>(this.api + this.configService.getAppCode() + 'activities/fnCancelActiviesSchedule', body, {
        headers: this.configService.headers(),
        params: this.activeRouter.snapshot.queryParams
      }).subscribe(
        data => {
          this.loading = false;
          this.items = data['items'];
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

  fnCheckExp(date : string){
    if( Date.parse(this.today) > Date.parse(date) ){
         
      return true;
    }else{
      return false;
    }
  }
}
