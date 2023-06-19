import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';


export class Model {


  constructor(
    public x_activity_type_id: string,
    public x_cust_latitude: string,
    public x_cust_longitude: string,
    public x_distance: string,
    public x_headerid: string,
    public x_photo_url: string,
    public x_res_id: string,
    public x_res_model_id: string,
    public x_res_name: string,
    public x_visit_reason: string,
    public x_not_visit_reason: string,
    public x_visit_code: string,
    public x_schedule_date: any,
    public x_schedule_time: string,
    public x_visited_longitude: string,
    public x_visited_latitude: string,
    public x_is_visited: string,

    public x_customer_id: string,
    public x_plan_time: any,
    public x_route_id: any,
    public x_summary: string,

    public x_actual_date: any,
    public x_actual_time: string,
    public x_note: string,
    public x_route_line_id: string,


  ) { }

}
@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  model: any = new Model("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  id: string = "";
  item: any = [];
  active = 1;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.httpGet();
  }
  httpGet() {
    this.http.get<any>(this.api + 'activities/detail/' + this.id, {
      headers: this.configService.headers(),
    }).subscribe(
      data => {
        console.log(data);
        this.item = data['item'];
        this.model.x_note = data['item']['x_note'];
        this.model.x_summary = data['item']['x_summary'];
        this.model.x_schedule_date = data['item']['x_schedule_date'];
        this.model.x_schedule_time = data['item']['x_schedule_time'];
        this.model.x_route_line_id = data['item']['x_route_line_id'];

      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

  remove() {
    const body = {
      id: this.id,
    }
    if (confirm("Remove this activity?")) {
      this.http.post<any>(this.api + 'activities/remove', body, {
        headers: this.configService.headers(),
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
  }
  onSubmit() {

  }
  back() {
    history.back();
  }

}
