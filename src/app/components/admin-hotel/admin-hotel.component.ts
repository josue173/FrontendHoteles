import { Component, OnInit } from '@angular/core';
import { AdminHotelService } from '../../services/admin-hotel.service';
import { Servicios } from '../../models/servicios.model';
import { Habitaciones } from 'src/app/models/habitaciones.model';
import { Eventos } from '../../models/eventos.model';
import { Reservaciones } from '../../models/reservaciones.model';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-admin-hotel',
  templateUrl: './admin-hotel.component.html',
  styleUrls: ['./admin-hotel.component.css'],
  providers: [AdminHotelService],
})
export class AdminHotelComponent implements OnInit {
  public reservacionesList: Reservaciones;
  public usuariosList: Usuario;

  hayErrorReservacion: Boolean = false;
  hayErrorHospedajes: Boolean = false;

  constructor(private _adminHotelService: AdminHotelService) {
    this.verReservaciones();
    this.verHospedajes();
  }

  ngOnInit(): void {}

  verReservaciones() {
    this.hayErrorReservacion = false;
    this._adminHotelService.verReservaciones().subscribe((response) => {
      this.reservacionesList = response.reservacionesEncontradas;
      if (response == null) {
        this.hayErrorReservacion = true;
      }
    });
  }

  verHospedajes() {
    this.hayErrorHospedajes = false;
    this._adminHotelService.verHospedajes().subscribe(
      (response) => {
        console.log(response);
        this.usuariosList = response.hospedajesEncontrados;
      },
      (error) => {
        this.hayErrorHospedajes = true;
      }
    );
  }
}
