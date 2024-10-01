import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service'; 

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  date = new Date();
  loading: boolean = false;
  api: string = environment.api;
  customer : any = [];
  ar : any = [];
  note : string = "";
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
    this.http.get<any>(this.api + this.configService.getAppCode()+ 'Res_partner/customerDetail', {
      headers: this.configService.headers(),
      params : {
        id : this.activeRoute.snapshot.queryParams['id'],
      }
    }).subscribe(
      data => {
        console.log(data); 
        this.customer = data['customer'][0];
        this.ar = data['ar'];
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }
  
 
  back() {
    history.back();
 
  }

}

