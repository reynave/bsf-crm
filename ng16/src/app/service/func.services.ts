import { Injectable } from '@angular/core';  
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncService { 
  constructor() { }

  formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  } 
}
