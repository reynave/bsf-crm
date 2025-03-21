import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-approval-top-detail',
  templateUrl: './approval-top-detail.component.html',
  styleUrls: ['./approval-top-detail.component.css']
})
export class ApprovalTopDetailComponent  implements OnInit {
  item: any = [];
  loading: boolean = false;
  monthNames: any = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: new Date(2025, i, 1).toLocaleString('en-US', { month: 'long' })
  }));; 
  id : string = '';
  constructor(
    private http: HttpClient,
    private activeRoute : ActivatedRoute,
    private configService: ConfigService,
  ) {
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.queryParams['id'];
    this.httpGet(); 
  }
  httpGet() {
    this.loading = true;
    this.http.get<any>(environment.api + this.configService.getAppCode() + "ApprovalTop/detail", {
      headers: this.configService.headers(),
      params: {
        id : this.activeRoute.snapshot.queryParams['id'],
      }
    }).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.item = data['items']; 
      },
      error => {
        console.log(error);
      }
    )
  }

  onApproved( status : number = 1) {
    if(confirm( (status== 1 ? 'Approve':'Reject')+" this item ?")){
      this.loading = true;
      const body = {
        id: this.id, 
        status  : status,
      }
      this.http.post<any>(environment.api + this.configService.getAppCode() + "ApprovalTop/onApproved",body, {
        headers: this.configService.headers(),
        
      }).subscribe(
        data => {
          this.loading = false;
          this.httpGet();
          console.log(data); 
        },
        error => {
          console.log(error);
        }
      )
    }
   
  }

  back() {
    history.back();
  }
}

