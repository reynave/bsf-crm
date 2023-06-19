import { Injectable } from '@angular/core'; 
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private tokenKey : string = "bsfJwtToken01";
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
}
