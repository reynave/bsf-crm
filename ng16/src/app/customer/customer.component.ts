import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { error } from 'jquery';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  date = new Date();
  show_res_partner: boolean = false;
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  searchCustomer: string = "";
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
  }
  httpGet() {
    this.http.get<any>(this.api + this.configService.getAppCode()+ 'Res_partner', {
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
    this.http.get<any>(this.api + this.configService.getAppCode()+ 'Res_partner/searchCustomer', {
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
    if(this.activeRoute.snapshot.queryParams['cardId']){
      const body = {
        id : this.activeRoute.snapshot.queryParams['cardId'],
        item: x,
      }
      this.http.post<any>(this.api +this.configService.getAppCode()+"carts/updateCustomer",body,{
        headers:this.configService.headers(),
      }).subscribe(
        data=>{
          console.log(data);
          history.back();
        },
        error=>{
          console.log(error);
        }
      )
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
