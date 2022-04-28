import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UsuariosInterface } from '../models/UsuariosInterface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = 'http://18.204.247.18:4000';

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  CargarAdministradores() : any {
    return this.http.get(`${this.API_URI}/admins`);
  }

  CargarDesarrolladores() : any {
    return this.http.get(`${this.API_URI}/developers`);
  }
}
