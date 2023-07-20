import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  item: any = [];
  id: string = "";
  total: number = 0;
  detail: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService,
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.httpGet();
  }

  httpGet() {
    this.loading = true;
    this.http.get<any>(this.api + 'order', {
      headers: this.configService.headers(),
    }).subscribe(
      data => {
        this.loading = false;
        this.item = data['item'];
        console.log(data);
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );
  }

  back() {
    history.back();
  }

  open(content: any, item: any) {
    this.detail = [];
    this.modalService.open(content, { fullscreen: true });
    this.loading = true;
    this.http.get<any>(this.api + 'order/detail/' + item['id'], {
      headers: this.configService.headers(),
    }).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.detail = data['detail']; 
      },
      e => {
        console.log(e);
        this.note = "Error Server!";
      },
    );


  }
}
