import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../models/servicios.model';
import { AdminHotelService } from '../../services/admin-hotel.service';

@Component({
  selector: 'app-admin-hotel-servicios',
  templateUrl: './admin-hotel-servicios.component.html',
  styleUrls: ['./admin-hotel-servicios.component.css'],
})
export class AdminHotelServiciosComponent implements OnInit {
  public serviciosModel: Servicios;

  public serviciosList: Servicios;

  constructor(private _adminHotelService: AdminHotelService) {
    this.serviciosModel = new Servicios('', '', '');
    this.verServicios();
  }

  ngOnInit(): void {}

  verServicios() {
    this._adminHotelService.verServicios().subscribe((response) => {
      this.serviciosList = response.servicioEncontrados;
    });
  }

  agregarServicios() {
    this._adminHotelService
      .agregarServicios(this.serviciosModel)
      .subscribe((response) => {
        console.log(response.servicioAgregado);
        console.log(this.serviciosModel);

        this.verServicios();
      });
  }
}
