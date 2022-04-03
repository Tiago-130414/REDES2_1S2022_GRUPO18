import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  API_URI = 'http://Proyecto1-Redes2-1643107626.us-east-1.elb.amazonaws.com:4000';

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  CargarHome() : any {
    return this.http.get(`${this.API_URI}/home`);
  }
}
