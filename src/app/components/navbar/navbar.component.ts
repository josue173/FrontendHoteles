import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hoteles } from 'src/app/models/hoteles.model';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UsuarioService],
})
export class NavbarComponent implements OnInit {
  public identidad;
  public token;
  public busquedaList: String;
  public idUsuarioModel: Usuario;
  hayError: Boolean = false;

  constructor(public _usuarioService: UsuarioService, private _router: Router) {
    this.identidad = this._usuarioService.getIdentidad(); //PARA VER EL ROL DE QUIEN SE LOGEO
    this.idUsuarioModel = new Usuario('', '', '', '', '', '', '');
    this.obtenerUsuarioId(this.identidad._id);
  }

  ngOnInit(): void {}

  buscar() {
    console.log(this.busquedaList);
    this._usuarioService.buscarHoteles(this.busquedaList).subscribe(
      (response) => {
        this.busquedaList = response.hotelEncontrado;
      }
      // (error) => {
      //   this.hayError = true;
    );
  }

  obtenerUsuarioId(idUsuario) {
    this._usuarioService.obtenerUsuarioId(idUsuario).subscribe((response) => {
      this.idUsuarioModel = response.idEncontrado;
    });
  }

  cerrarSesion() {
    localStorage.removeItem('identidad');
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
