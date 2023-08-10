import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  itemQty : number = 0;
  qty : number = 1;
  totalAmount : number = 0;
  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService, 
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal
  ){ }
  
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.httpGet();
    this.cart();
  }

  httpGet(){  
    this.http.get<any>(this.api + this.configService.getAppCode()+'product/detail/'+this.id, {
      headers : this.configService.headers(),
    }).subscribe(
      data => {
        this.loading = false;
        this.item = data['item'];
        this.itemQty  = data['qty'];
        console.log(data); 
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }
 
  addToCard(){
    const body = {
      id: this.id,
      item : this.item,
      qty : this.qty,
    }
    this.http.post<any>(this.api + this.configService.getAppCode()+'product/addToCard', body, {
      headers : this.configService.headers(),
    }).subscribe(
      data => {
        this.loading = false; 
        console.log(data); 
        this.modalService.dismissAll();
        this.cart(); 
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

  cart(){  
    this.loading = true;  
    this.http.get<any>(this.api + this.configService.getAppCode()+'cart', {
      headers : this.configService.headers(),
    }).subscribe(
      data => { 
        console.log(data);  
        this.totalAmount = data['total'];
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
}
