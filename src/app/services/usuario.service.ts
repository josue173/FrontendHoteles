import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

import { GLOBAL } from './global.service';
import { Hoteles } from '../models/hoteles.model';
import { Reservaciones } from '../models/reservaciones.model';
import { Habitaciones } from '../models/habitaciones.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
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

  // FUNCIONES GENERALES

  verHoteles(): Observable<any> {
    return this._http.get(this.url + '/verHoteles', {
      headers: this.headersVariable,
    });
  } //100

  buscarHoteles(buscar): Observable<any> {
    let params = JSON.stringify(buscar);
    // let params = JSON.parse(buscar);
    return this._http.post(this.url + '/buscarHotel', params, {
      headers: this.headersVariable,
    });
  } //0

  verHotel(hotel): Observable<any> {
    return this._http.get(this.url + '/verHotel/' + hotel, {
      headers: this.headersVariable,
    });
  } //100

  verHabitaciones(hotelHabitacionID): Observable<any> {
    return this._http.get(this.url + '/verHabitaciones/' + hotelHabitacionID, {
      headers: this.headersVariable,
    });
  } //100

  verHabitacion(idHabitacion): Observable<any> {
    return this._http.get(this.url + '/verHabitacion/' + idHabitacion, {
      headers: this.headersVariable,
    });
  } //100

  verServicios(hotelID): Observable<any> {
    return this._http.get(this.url + '/verServicios/' + hotelID, {
      headers: this.headersVariable,
    });
  } //100

  // FUNCIOES USUARIOS

  registro(usuario: Usuario): Observable<any> {
    let params = JSON.stringify(usuario);
    return this._http.post(this.url + '/registrarUsuarios', params, {
      headers: this.headersVariable,
    });
  } //100

  login(usuario, token = null): Observable<any> {
    if (token != null) {
      usuario.token = token;
    }
    let params = JSON.stringify(usuario);

    return this._http.post(this.url + '/loginUsuarios', params, {
      headers: this.headersVariable,
    });
  } //100

  getIdentidad() {
    //OBTENER DATOS DEL LOCAL STORAGE
    var identidad2 = JSON.parse(localStorage.getItem('identidad')); //.parse CONVIERTE DE js A json
    // 'identidad' viene del localstorage
    if (identidad2 != 'undefined') {
      this.identidad = identidad2;
    } else {
      this.identidad = null;
    }
    return this.identidad;
  } //NO NECESITA SER OBSERVABLE 100

  getToken() {
    //OBTENER EL TOKEN DEL localstorage, NO SE PARSEA PORQUE EL TOKEN YA ESTA COMO STRING, LO MISMO CON EL getIdentidad()
    var token2 = localStorage.getItem('token');
    if (token2 != 'undefined') {
      this.token = token2;
    } else {
      this.token = null;
    }
    return this.token;
  } //NO NECESITA SER OBSERVABLE 100

  buscarHabitaciones() {} //0

  buscarEventos() {} //0

  obtenerUsuarioId(id: String): Observable<any> {
    return this._http.get(this.url + '/obtenerUsuarioId/' + id, {
      headers: this.headersVariable,
    });
  } //100

  obtenerPerfil(id): Observable<any> {
    return this._http.get(this.url + '/obtenerPerfil/' + id, {
      headers: this.headersToken,
    });
  } //100

  editarCuenta(usuario: Usuario): Observable<any> {
    let params = JSON.stringify(usuario);
    return this._http.put(this.url + '/editarCuenta/' + usuario._id, params, {
      headers: this.headersToken,
    });
  } //100

  elimitarCuenta(id) {
    return this._http.delete(this.url + '/eliminarCuenta/' + id, {
      headers: this.headersToken,
    });
  } //100

  reservar(reservaciones: Reservaciones, id): Observable<any> {
    let params = JSON.stringify(reservaciones);
    return this._http.post(this.url + '/reservar/' + id, params, {
      headers: this.headersToken,
    });
  } //0

  //FUNCIONES DE ADMINISTRADOR DE APLICACION

  verUsuarios(): Observable<any> {
    return this._http.get(this.url + '/verUsuarios', {
      headers: this.headersToken,
    });
  } //100

  agregarAdminHotel(usuario: Usuario): Observable<any> {
    let params = JSON.stringify(usuario);
    return this._http.post(this.url + '/agregarAdminHotel', params, {
      headers: this.headersToken,
    });
  } //100

  agregarHoteles(hotel: Hoteles, id): Observable<any> {
    let params = JSON.stringify(hotel);
    return this._http.post(this.url + '/agregarHotel/' + id, params, {
      headers: this.headersToken,
    });
  } //100

  verHotelesAdmin(): Observable<any> {
    return this._http.get(this.url + '/verHotelesAdmin', {
      headers: this.headersToken,
    });
  }

  eliminarUsuarios(id): Observable<any> {
    return this._http.delete(this.url + '/eliminarUsuarios/' + id, {
      headers: this.headersToken,
    });
  }

  editarUsuario(usuario: Usuario): Observable<any> {
    let params = JSON.stringify(usuario);
    return this._http.put(this.url + '/editarUsuarios/' + usuario._id, params, {
      headers: this.headersToken,
    });
  }

  editarHotel(hotel: Hoteles): Observable<any> {
    let params = JSON.stringify(hotel);
    return this._http.put(this.url + '/editarHotel/' + hotel._id, params, {
      headers: this.headersToken,
    });
  }

  eliminarHoteles(id): Observable<any> {
    return this._http.delete(this.url + '/eliminarHotel/' + id, {
      headers: this.headersToken,
    });
  }
}
