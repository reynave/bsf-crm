import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { environment } from 'src/environments/environment';
declare let moduleReportCustomer: boolean;


@Component({
  selector: 'app-report-customer',
  templateUrl: './report-customer.component.html',
  styleUrls: ['./report-customer.component.css']
})
export class ReportCustomerComponent   implements OnInit {
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
      private router: Router,
  ) {
  }

  ngOnInit(): void {
     if (moduleReportCustomer == true) { 
      this.monthlySelect();
      this.onFilter();
    }else{
      this.router.navigate(['error']);
    }
    this.monthlySelect();
    this.onFilter();
  }
  monthlySelect() {
    this.http.get<any>(environment.api + this.configService.getAppCode() + "ReportCustomer/index", {
      headers: this.configService.headers(),
      params: {}
    }).subscribe(
      data => {
        console.log(data);
        this.selectCabang = data['x_mastercabang'];
        this.selectName = data['selectName'];
      },
      error => {
        console.log(error);
      }
    )
  }

  onFilter() {
    this.loading = true;
    this.http.get<any>(environment.api + this.configService.getAppCode() + "ReportCustomer/detail", {
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
