import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

export class Model {
  constructor(
    public schedule_date: any,
    public customerId: string,
    public x_salesperson_id: string,
  ) { }
}

@Component({
  selector: 'app-activity-insert',
  templateUrl: './activity-insert.component.html',
  styleUrls: ['./activity-insert.component.css']
})
export class ActivityInsertComponent implements OnInit {
  date = new Date();
  show_res_partner: boolean = false;
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  searchCustomer: string = "";
  model: any = new Model(this.date.getFullYear() + '-' + ("0" + (this.date.getMonth() + 1)).slice(-2) + '-' + ("0" + (this.date.getDate() + 1)).slice(-2), "", "");
  id: string = "";
  item: any = [];
  res_partner: any = [];
  total: number = 0;
  totalAll: number = 0;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private configService: ConfigService,
  ) {
  }
  ngOnInit(): void {
    this.httpGet();
    this.model.x_salesperson_id = this.configService.accountId();
  }
  httpGet() {
    this.http.get<any>(this.api + 'Res_partner', {
      headers: this.configService.headers(),
    }).subscribe(
      data => {
        console.log(data);
        this.totalAll = data['total'];
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }
  onSearch() {
    this.show_res_partner = true;
    const body = {
      name: this.searchCustomer
    }
    this.http.get<any>(this.api + 'Res_partner/searchCustomer', {
      headers: this.configService.headers(),
      params: {
        name: this.searchCustomer
      }
    }).subscribe(
      data => {
        console.log(data);
        this.total = data['total'];
        this.res_partner = data['res_partner'];
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );

  }

  objCustomer: any = [];
  onSelectCustomer(x: any) {
    this.objCustomer = x;
    console.log(this.objCustomer);
    if (confirm("Add Activity ?")) {
 
      this.model.customerId = this.objCustomer['id'];
      const body = {
        model: this.model,
        customer: this.objCustomer,
      }

      this.http.post<any>(this.api + 'activities/createActivity', body, {
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

  back() {
    if (this.show_res_partner) {
      this.show_res_partner = false;

    } else {
      history.back();
    }

  }

}
