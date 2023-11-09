import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  search : string = "";
  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService,
    private activeRouter : ActivatedRoute
  ){ }


  ngOnInit(): void {
    this.httpGet();
  }
  httpGet(){  
    this.http.get<any>(this.api + this.configService.getAppCode()+ 'product', {
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
  onSearch(){
    if(this.search.length >= 3){
      const body = {
        search : this.search,
        x_customer_id : this.activeRouter.snapshot.queryParams['x_customer_id'],
      }
      this.router.navigate(['product/list'],{queryParams:body});
    }
  }

  back(){
    history.back();
  }
}
