import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  item : any = [];
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
    this.http.get<any>(this.api + 'cart', {
      headers : this.configService.headers(),
    }).subscribe(
      data => {
        this.customer = data['customer'];
        this.loading = false;
        this.item = data['item'];
        this.id = data['id'];
        console.log(data); 
        this.total = data['total'];
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }
 
  updateQty(x:any){
    this.loading = true;  
    const body = { 
      item : x, 
    }
    this.http.post<any>(this.api + 'cart/updateQty', body, {
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
      this.http.post<any>(this.api + 'cart/removeCart', body, {
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
    this.http.post<any>(this.api + 'cart/onCloseCart', body, {
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

   
}
