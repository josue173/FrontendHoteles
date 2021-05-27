import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitaciones } from '../models/habitaciones.model';

import { GLOBAL } from './global.service';
import { Eventos } from '../models/eventos.model';
import { Servicios } from '../models/servicios.model';

@Injectable({
  providedIn: 'root',
})
export class AdminHotelService {
  public url: string;
  public token;
  public identidad; //GUARDA LOS DATOS DEL USUARIO LOGEADO

  public headersVariable = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );
  public headersToken = this.headersVariable.set(
    'Authorization',
    this.getToken()
  );
  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getIdentidad() {
    //OBTENER DATOS DEL LOCAL STORAGE
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    // 'identidad' viene del localstorage
    if (identidad2 != 'undefined') {
      this.identidad = identidad2;
    } else {
      this.identidad = null;
    }
    return this.identidad;
  }

  getToken() {
    //OBTENER EL TOKEN DEL localstorage, NO SE PARSEA PORQUE EL TOKEN YA ESTA COMO STRING, LO MISMO CON EL getIdentidad()
    var token2 = localStorage.getItem('token');
    if (token2 != 'undefined') {
      this.token = token2;
    } else {
      this.token = null;
    }
    return this.token;
  }

  // FUNCIONES

  agregarHabitaciones(habitaciones: Habitaciones): Observable<any> {
    let params = JSON.stringify(habitaciones);
    return this._http.post(this.url + '/agregarHabitaciones', params, {
      headers: this.headersToken,
    });
  } //100

  verEventos(): Observable<any> {
    return this._http.get(this.url + '/verEventos', {
      headers: this.headersToken,
    });
  } //100

  agregarEventos(eventos: Eventos): Observable<any> {
    let params = JSON.stringify(eventos);
    return this._http.post(this.url + '/agregarEventos', params, {
      headers: this.headersToken,
    });
  } //100

  verServicios(): Observable<any> {
    return this._http.get(this.url + '/verServicios', {
      headers: this.headersToken,
    });
  }

  agregarServicios(servicios: Servicios): Observable<any> {
    let params = JSON.stringify(servicios);
    return this._http.post(this.url + '/agregarServicios', params, {
      headers: this.headersToken,
    });
  } //100

  verHabitaciones(): Observable<any> {
    return this._http.get(this.url + '/habitacionesDisponibles', {
      headers: this.headersToken,
    });
  } //100

  verReservaciones(): Observable<any> {
    return this._http.get(this.url + '/verReservaciones', {
      headers: this.headersToken,
    });
  } //100

  verHospedajes(): Observable<any> {
    return this._http.get(this.url + '/verHospedajes', {
      headers: this.headersToken,
    });
  } //100

  buscarHespedajes() {} //0
}
