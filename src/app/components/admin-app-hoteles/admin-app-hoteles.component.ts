import { Component, OnInit } from '@angular/core';
import { Hoteles } from '../../models/hoteles.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-admin-app-hoteles',
  templateUrl: './admin-app-hoteles.component.html',
  styleUrls: ['./admin-app-hoteles.component.css'],
})
export class AdminAppHotelesComponent implements OnInit {
  public hotelModel: Hoteles;
  public idAdministrador: String;
  public hotelList;
  public hotelMostrar;
  public identidad;
  public token;

  constructor(private _usuarioService: UsuarioService) {
    this.identidad = this._usuarioService.getIdentidad();
    this.token = this._usuarioService.getToken();
    this.hotelModel = new Hoteles('', '', '', '', '', '');
    this.hotelMostrar = new Hoteles('', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.verHoteles();
  }

  agregarHoteles() {
    this._usuarioService
      .agregarHoteles(this.hotelModel, this.idAdministrador)
      .subscribe((response) => {
        console.log(response);
      });
  }

  verHoteles() {
    this._usuarioService.verHotelesAdmin().subscribe(
      (response) => {
        this.hotelList = response.hotelesEncontrados;
        console.log(this.hotelList);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  verHotel(idHotel) {
    this._usuarioService.verHotel(idHotel).subscribe(
      (response) => {
        this.hotelMostrar = response.hotelEncontrado;
        // console.log(response.hotelEncontrado);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  editarHotel() {
    this._usuarioService
      .editarHotel(this.hotelMostrar)
      .subscribe((response) => {
        // console.log(response);
        this.verHoteles();
      });
  }
  eliminarHotel(id) {
    this._usuarioService.eliminarHoteles(id).subscribe((response) => {
      this.verHoteles();
    });
  }
}
