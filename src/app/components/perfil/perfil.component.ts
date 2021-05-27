import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [UsuarioService],
})
export class PerfilComponent implements OnInit {
  public identidad;
  public idUsuarioModel: Usuario;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {
    this.identidad = this._usuarioService.getIdentidad();
    this.idUsuarioModel = new Usuario('', '', '', '', '', '', '');
  }

  ngOnInit(): void {}

  verPefil() {
    this._usuarioService
      .obtenerPerfil(this.identidad._id)
      .subscribe((response) => {
        this.identidad = response.perfilEncontrado;
      });
  }

  obtenerUsuarioId(idUsuario) {
    this._usuarioService.obtenerUsuarioId(idUsuario).subscribe((response) => {
      this.idUsuarioModel = response.idEncontrado;
      console.log(response);
    });
  }

  editarCuenta() {
    console.log();
    this._usuarioService
      .editarCuenta(this.idUsuarioModel)
      .subscribe((response) => {
        this.verPefil();
      });
  }

  eliminarCuenta(id) {
    this._usuarioService.elimitarCuenta(id).subscribe((response) => {
      localStorage.removeItem('identidad');
      localStorage.removeItem('token');
      this._router.navigate(['/login']);
    });
  }
}
