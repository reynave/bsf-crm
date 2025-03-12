import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-target-year',
  templateUrl: './target-year.component.html',
  styleUrls: ['./target-year.component.css']
})
export class TargetYearComponent implements OnInit {
  items: any = [];
  loading: boolean = false;
 
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
    this.monthlySelect();
  }
  monthlySelect() {
    this.http.get<any>(environment.api + this.configService.getAppCode() + "Target/yearSelect", {
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
    this.http.get<any>(environment.api + this.configService.getAppCode() + "Target/yearly", {
      headers: this.configService.headers(),
      params: { 
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
