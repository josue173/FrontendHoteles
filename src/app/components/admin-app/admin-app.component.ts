import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Hoteles } from '../../models/hoteles.model';

@Component({
  selector: 'app-admin-app',
  templateUrl: './admin-app.component.html',
  styleUrls: ['./admin-app.component.css'],
  providers: [UsuarioService],
})
export class AdminAppComponent implements OnInit {
  public usuarioModel: Usuario;
  public hotelModel: Hoteles;
  public idAdministrador: String;
  public usuariosList;
  public identidad;
  public token;

  constructor(private _usuarioService: UsuarioService) {
    this.identidad = this._usuarioService.getIdentidad();
    this.token = this._usuarioService.getToken();
    this.usuarioModel = new Usuario('', '', '', '', '', '', '');
    this.hotelModel = new Hoteles('', '', '', '', '','');
  }

  ngOnInit(): void {
    // this.verUsuarios();
  } //ngOnInit es para inicializar, no para agregar

  // verUsuarios() {
  //   this._usuarioService.verUsuarios().subscribe(
  //     (response) => {
  //       console.log(response.usuariosEncontrados);
  //       this.usuariosList = response.usuariosEncontrados;
  //       // this.usuariosList = response.hotelesEncontrados;
  //     },
  //     (error) => {
  //       console.log(<any>error);
  //     }
  //   );
  // }

  agregarAdminHotel() {
    this._usuarioService
      .agregarAdminHotel(this.usuarioModel)
      .subscribe((response) => {
        console.log(response);
      });
  }

  // agregarHoteles() {
  //   this._usuarioService
  //     .agregarHoteles(this.hotelModel, this.idAdministrador)
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }
}
