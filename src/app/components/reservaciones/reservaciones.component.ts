import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { ActivatedRoute } from '@angular/router';
import { Habitaciones } from '../../models/habitaciones.model';
import { Servicios } from '../../models/servicios.model';
import { Reservaciones } from 'src/app/models/reservaciones.model';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css'],
})
export class ReservacionesComponent implements OnInit {
  public usuarioList: Usuario;
  public habitacionList: Habitaciones;
  public reservaList;
  public identidad;
  public idUsuarioModel: Usuario;
  public idHabitacionRuta: String;
  public usuarioModel: Usuario;
  public serviciosList: Servicios;
  public hotelesList;

  public reservaModel: Reservaciones;

  public hotelID;

  constructor(
    private _usuarioService: UsuarioService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.usuarioModel = new Usuario('', '', '', '', '', '', '');
    this.identidad = this._usuarioService.getIdentidad();
    this.identidad = this._usuarioService.getIdentidad(); //PARA VER EL ROL DE QUIEN SE LOGEO
    this.idUsuarioModel = new Usuario('', '', '', '', '', '', '');
    this.reservaModel = new Reservaciones('', '', '', '', '');
    this.obtenerUsuarioId(this.identidad._id);
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((response) => {
      this.idHabitacionRuta = response.get('habitacionReservaID'); //habitacionReservaID VIENE DE app-routing.module.js
      // console.log(response.get('habitacionReservaID')); // SI FUNCIONA
    });
    this.verHabitaciones(this.idHabitacionRuta);
  }

  obtenerUsuarioId(idUsuario) {
    this._usuarioService.obtenerUsuarioId(idUsuario).subscribe((response) => {
      this.idUsuarioModel = response.idEncontrado;
    });
  }

  verServicios(idHotel) {
    this._usuarioService.verServicios(idHotel).subscribe((response) => {
      this.serviciosList = response.serviciosEncontrados;
    });
  }

  verHabitaciones(idHotel) {
    this._usuarioService.verHabitacion(idHotel).subscribe((response) => {
      this.habitacionList = response.habitacionEncontrada;
      this.hotelID = response.habitacionEncontrada.hotel;
    });
  }

  reservar(id) {
    this._usuarioService
      .reservar(this.reservaModel, id)
      .subscribe((response) => {
        // this.reservaList = response.reservacionGuardada;
        console.log(response);
      });
  }
}
