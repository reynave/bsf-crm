import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService,
  ) { }

  logout() {
    this.configService.removeToken().subscribe(
      data =>{
        if(data == true){
          this.router.navigate(['login']);
        }
      }
    )
  }
}
