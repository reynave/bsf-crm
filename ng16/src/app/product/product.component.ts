import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  items : any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService,
  ){ }


  ngOnInit(): void {
    this.httpGet();
  }
  httpGet(){  
    this.http.get<any>(this.api + 'product', {
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
  back(){
    history.back();
  }
}
