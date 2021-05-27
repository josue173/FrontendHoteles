import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Hoteles } from '../../models/hoteles.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Habitaciones } from '../../models/habitaciones.model';
import { Servicios } from '../../models/servicios.model';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css'],
  providers: [UsuarioService],
})
export class HotelesComponent implements OnInit {
  public hotelModel: Hoteles; // MODELO DE HOTELES
  public idHotelRuta: String; // TRAE EL id DEL HOTEL POR LA RUTA

  public hotelesList: Hoteles;
  public habitacionesList: Habitaciones;
  public serviciosList: Servicios;

  public identidad;

  constructor(
    private _usuarioService: UsuarioService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.identidad = this._usuarioService.getIdentidad();
    this.hotelModel = new Hoteles('', '', '', '', '', '');
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((response) => {
      this.idHotelRuta = response.get('hotelID');
      // console.log(response.get('hotelID')); // SI FUNCIONA
    });
    this.verHotel(this.idHotelRuta);
    this.verHabitaciones(this.idHotelRuta);
    this.verServicios(this.idHotelRuta);
  }

  verHotel(idHotel) {
    this._usuarioService.verHotel(idHotel).subscribe(
      (response) => {
        this.hotelesList = response.hotelEncontrado;
        console.log(response.hotelEncontrado);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  verHabitaciones(idHotel) {
    this._usuarioService.verHabitaciones(idHotel).subscribe((response) => {
      this.habitacionesList = response.habitacionesEncontradas;
    });
  }

  verServicios(idHotel) {
    this._usuarioService.verServicios(idHotel).subscribe((response) => {
      this.serviciosList = response.serviciosEncontrados;
    });
  }

  navegarHabitacion(idHabitacion) {
    this._router.navigate(['/habitaciones', idHabitacion]);
  }

  navegarReservaciones(idHabitacion) {
    this._router.navigate(['/reservaciones', idHabitacion]);
  }
}
