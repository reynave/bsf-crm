import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-relogin',
  templateUrl: './relogin.component.html',
  styleUrls: ['./relogin.component.css']
})
export class ReloginComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  note: string = "";
  items : any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService,
  ){ }
  ngOnInit(): void {
    
  }

  relogin(){
    this.configService.removeToken().subscribe(
      ()=>{
        this.router.navigate(['./login']);
      }
    )
  }
}
