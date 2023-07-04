import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  item : any = [];
  id : string = "";
  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService, 
    private activeRoute: ActivatedRoute,
  ){ }



  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.httpGet();
  }

  httpGet(){  
    this.http.get<any>(this.api + 'product/detail/'+this.id, {
      headers : this.configService.headers(),
    }).subscribe(
      data => {
        this.loading = false;
        this.item = data['item'];
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
