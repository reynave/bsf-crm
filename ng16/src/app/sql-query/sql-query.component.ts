import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core'; 
import { environment } from 'src/environments/environment';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-sql-query',
  templateUrl: './sql-query.component.html',
  styleUrls: ['./sql-query.component.css']
})
export class SqlQueryComponent {
  query : string = "";

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
  ){}


  run(){
    const body = {
      query : this.query,
      token : "0Iq8nd06QVIltc8PH4uL0HZmrsAxJ6RJhS0Cz9OQAlY7ncw2fg"  }
    this.http.post( environment.api+ this.configService.getAppCode()+"table/sql", body, {
      headers : this.configService.headers(),
    } ).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
