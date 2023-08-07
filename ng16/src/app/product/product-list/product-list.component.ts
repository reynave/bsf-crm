import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/service/config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  search: string = "";
  total : string = "";
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private routes: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.search = this.activatedRoute.snapshot.queryParams['search']; 
    this.mytable();
    this.httpGet();
  }
  mytable() {

    this.dtOptions = {
      //   serverSide: true,     // Set the flag 
      ajax: {
        url: environment.api +this.configService.getAppCode() + 'product/datatable',
        data: this.activatedRoute.snapshot.queryParams,
        type: "GET",
        headers: {
          'token': "coming soon",
        },
      },
      ordering: false,
      lengthMenu: [50, 100, 200, 500],
      lengthChange: false,
      columns: [
        {
          title: 'Name',
          data: 'name',
          render: function (data: any, type: any, full: any) {
            let price = new Intl.NumberFormat().format(full['list_price']);
            let url = full['qty_available'] > 0 ?  "#/product/detail/"+full['id'] :"javascript:;";
            let a = `
            <a href="${url}">
                <div >${data}</div>
                <div class="row">
                    <div class="col text-monospace text-info">${full['default_code']}</div>
                    <div class="col text-end text-primary">Rp ${price}</div>
                </div>
                <div class="row">
                <div class="col">
                <span class="badge badge-sm bg-${full['qty_available'] > 0 ? "success":"light" }">${full['qty_available'] > 0 ? "Avaiable":"Not Avaiable" }</span>
              </div>
                  <div class="col text-end"> <small>Qty : ${full['qty_available'] < 0 ? 0 :full['qty_available'] }<small>  </div>
                 
                </div>
             </a>`;
            return a;
          }
        },
      ]
    };
  }

  httpGet(){
    this.http.get<any>(environment.api + 'product/datatable?search='+ this.search, {
      headers : this.configService.headers(),
    }).subscribe(
      data => {
        this.total = data['total']; 
      },
      e => {
        console.log(e);
        
      },
    );
  }
  back() {
    history.back();
  }
}
