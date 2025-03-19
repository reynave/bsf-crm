import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-approval-credit-limit',
  templateUrl: './approval-credit-limit.component.html',
  styleUrls: ['./approval-credit-limit.component.css']
})
export class ApprovalCreditLimitComponent   implements OnInit {
  items: any = [];
  loading: boolean = false;
  monthNames: any = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: new Date(2025, i, 1).toLocaleString('en-US', { month: 'long' })
  }));;
  x_bulan: number = new Date().getMonth() + 1;
  x_tahun: number = 2025;
  x_cabang: string = "";
  x_name: string = "";

  selectCabang: any = [];
  selectName: any = [];
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {
  }

  ngOnInit(): void {
    this.httpGet(); 
  }
  httpGet() {
    this.loading = true;
    this.http.get<any>(environment.api + this.configService.getAppCode() + "ApprovalCreditLimit/index", {
      headers: this.configService.headers(),
      params: {}
    }).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.items = data['items']; 
      },
      error => {
        console.log(error);
      }
    )
  }

  onFilter() {
    this.loading = true;
    this.http.get<any>(environment.api + this.configService.getAppCode() + "ApprovalCreditLimit/detail", {
      headers: this.configService.headers(),
      params: {
        x_bulan: this.x_bulan,
        x_tahun: this.x_tahun,
        x_name: this.x_name,
        x_cabang: this.x_cabang
      }
    }).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.items = data['items'];
      },
      error => {
        console.log(error);
      }
    )
  }

  back() {
    history.back();
  }
}
