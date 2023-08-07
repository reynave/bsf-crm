import { Injectable } from '@angular/core'; 
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private tokenKey : string = environment.tokenName;
  constructor() { }

  setToken(token: string): Observable<boolean> {
    try {
      localStorage.setItem(this.tokenKey, token);
      return of(true); // Mengembalikan Observable yang mengirimkan nilai boolean true
    } catch (error) {
      return of(false); // Mengembalikan Observable yang mengirimkan nilai boolean false jika terjadi kesalahan
    }
  }

  removeToken(): Observable<boolean> {
    try {
      localStorage.removeItem(this.tokenKey);
      return of(true); // Mengembalikan Observable yang mengirimkan nilai boolean true
    } catch (error) {
      return of(false); // Mengembalikan Observable yang mengirimkan nilai boolean false jika terjadi kesalahan
    }
  }


  getToken(): any | null {
    return localStorage.getItem(this.tokenKey);
  }

  getAppCode(): any | null {
    return localStorage.getItem("appCodeManasol");
  }

  headers() { 
    return   new HttpHeaders({
      'Content-Type': 'application/json', 
      'Token': this.getToken(),
    });
  }
  
  account(){
    const jwtObj = this.getToken().split("."); 

    return JSON.parse(atob(jwtObj[1]));
  }

  accountId(){
    return this.account()['account']['id'];
  }
}
