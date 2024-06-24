import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit{
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  items : any = [];
  header : any = [];
  
  id : string = "";
  total : number = 0;
  customer : any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService, 
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal
  ){ }
 
  ngOnInit(): void { 
    this.httpGet();
  }

  httpGet(){  
    this.loading = true;  
    this.http.get<any>(this.api + this.configService.getAppCode()+'carts', {
      headers : this.configService.headers(),
    }).subscribe(
      data => {
        this.items = data['x_customer_po']; 
        
        this.loading = false; 
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

  open(content: any) {
		this.modalService.open(content, { fullscreen: true });
	}

  removeCart(x:any){
 
    if(confirm("Remove this item ?")){
      const body = { 
        item : x, 
      }
      this.loading = true;  
      this.http.post<any>(this.api + this.configService.getAppCode()+'carts/removeCart', body, {
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

  onCloseCart(){
    const body = {  
      id : this.id
    }
    this.http.post<any>(this.api +this.configService.getAppCode()+ 'cart/onCloseCart', body, {
      headers : this.configService.headers(),
    }).subscribe(
      data => {
        console.log(data);
        this.loading = false;  
        this.router.navigate(['order']);
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

  newOrder(){
    const body = {  
      status : true
    }
    this.http.post<any>(this.api +this.configService.getAppCode()+ 'carts/newOrder', body, {
      headers : this.configService.headers(),
    }).subscribe(
      data => {
        console.log(data);
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
