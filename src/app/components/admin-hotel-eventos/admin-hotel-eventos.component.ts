import { Component, OnInit } from '@angular/core';
import { AdminHotelService } from '../../services/admin-hotel.service';
import { Eventos } from '../../models/eventos.model';

@Component({
  selector: 'app-admin-hotel-eventos',
  templateUrl: './admin-hotel-eventos.component.html',
  styleUrls: ['./admin-hotel-eventos.component.css'],
})
export class AdminHotelEventosComponent implements OnInit {
  public eventosModel: Eventos;

  public eventosList: Eventos;
  constructor(private _adminHotelService: AdminHotelService) {
    this.eventosModel = new Eventos('', '', '');
    this.verEventos();
  }

  ngOnInit(): void {}

  verEventos() {
    this._adminHotelService.verEventos().subscribe((response) => {
      this.eventosList = response.eventoEncontrado;
      console.log(response);
    });
  }

  agregarEventos() {
    this._adminHotelService
      .agregarEventos(this.eventosModel)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
