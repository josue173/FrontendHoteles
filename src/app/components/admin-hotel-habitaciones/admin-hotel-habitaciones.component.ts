import { Component, OnInit } from '@angular/core';
import { AdminHotelService } from '../../services/admin-hotel.service';
import { Habitaciones } from '../../models/habitaciones.model';
import { Eventos } from '../../models/eventos.model';
import { Servicios } from '../../models/servicios.model';
import { Reservaciones } from '../../models/reservaciones.model';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-admin-hotel-habitaciones',
  templateUrl: './admin-hotel-habitaciones.component.html',
  styleUrls: ['./admin-hotel-habitaciones.component.css'],
})
export class AdminHotelHabitacionesComponent implements OnInit {
  //MODELOS DE DATOS ALMACENAR Y ENVIAR A LA DB
  public habitacionesModel: Habitaciones;
  public eventosModel: Eventos;
  public serviciosModel: Servicios;
  //VARAIBLES PARA ALMACENAR Y MOSTRAR INFORMACION
  public habitacionesList: Habitaciones;
  public eventosList: Eventos;
  public serviciosList: Servicios;
  public reservacionesList: Reservaciones;
  public usuariosList: Usuario;

  constructor(private _adminHotelService: AdminHotelService) {
    this.habitacionesModel = new Habitaciones('', '', '','', 0, '','');
    this.eventosModel = new Eventos('', '', '');
    this.serviciosModel = new Servicios('', '', '');
    this.verHabitaciones();
  }

  ngOnInit(): void {}

  verHabitaciones() {
    this._adminHotelService.verHabitaciones().subscribe((response) => {
      this.habitacionesList = response.habitacionesEncontradas;
    });
  }

  agregarHabitaciones() {
    this._adminHotelService
      .agregarHabitaciones(this.habitacionesModel)
      .subscribe((response) => {
        this.verHabitaciones();
      });
  }
}
