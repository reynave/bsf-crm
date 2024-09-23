import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carts-detail',
  templateUrl: './carts-detail.component.html',
  styleUrls: ['./carts-detail.component.css']
})
export class CartsDetailComponent implements   OnInit{
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  items : any = [];
  header : any = [];
  x_note : string = "";
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
    this.loading = true;  
    this.id = this.activeRoute.snapshot.queryParams['id'];
    this.httpGet();
  }

  httpGet(){  
  
    this.http.get<any>(this.api + this.configService.getAppCode()+'carts/detail', {
      headers : this.configService.headers(),
      params : {
        id : this.activeRoute.snapshot.queryParams['id']
      }
    }).subscribe(
      data => { 
        this.loading = false;
        this.items = data['items'];
        this.header = data['header'][0]; 
        this.id = data['id'];
        console.log(data);  
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }
  updateHeader(){
    const body = { 
      header : this.header, 
      
    }
    console.log(body)
    this.http.post<any>(this.api +this.configService.getAppCode()+ 'carts/updateHeader', body, {
      headers : this.configService.headers(),
    }).subscribe(
      data => { 
        console.log(data);
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

  updateQty(x:any){ 
    const body = { 
      item : x, 
    }
    this.http.post<any>(this.api +this.configService.getAppCode()+ 'carts/updateQty', body, {
      headers : this.configService.headers(),
    }).subscribe(
      data => { 
        this.httpGet();
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

  fnDeleteDetail(id : string){
    if(confirm("Delete this item ? ")){
      const body = {
        id : id ,
      }
      this.http.post<any>(this.api +this.configService.getAppCode()+ 'carts/fnDeleteDetail', body, {
        headers : this.configService.headers(),
      }).subscribe(
        data => {
          this.loading = true;  
          this.httpGet();
        },
        e => {
          console.log(e);
          this.note = "Error Server!";
        },
      );
    }
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
      this.http.post<any>(this.api + this.configService.getAppCode()+'cart/removeCart', body, {
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

  remove(){
    if(confirm("Remove this item ?")){
      const body = { 
        item : {
          id : this.activeRoute.snapshot.queryParams['id'],
        }
      }
      this.loading = true;  
      this.http.post<any>(this.api + this.configService.getAppCode()+'carts/removeCart', body, {
        headers : this.configService.headers(),
      }).subscribe(
        data => {
          this.loading = false;  
          history.back(); 
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
      id : this.activeRoute.snapshot.queryParams['id'],
    }
    this.http.post<any>(this.api +this.configService.getAppCode()+ 'carts/onCloseCart', body, {
      headers : this.configService.headers(),
    }).subscribe(
      data => {
        console.log(data);
        this.loading = false;  
        this.router.navigate(['home']);
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

   
}
