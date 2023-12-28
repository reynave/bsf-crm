import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  item: any = [];
  id: string = "";
  total: number = 0;
  detail: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService,
    private activeRoute: ActivatedRoute, 
  ) { }
  ngOnInit() {
    this.id = this.activeRoute.snapshot.queryParams['id'];
     this.httpGet();
  }

  httpGet(){
    this.detail = []; 
    this.loading = true;
    this.http.get<any>(this.api + this.configService.getAppCode()+ 'order/detail/'+this.id,   {
      headers: this.configService.headers(), 
    }).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.detail = data['detail']; 
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
