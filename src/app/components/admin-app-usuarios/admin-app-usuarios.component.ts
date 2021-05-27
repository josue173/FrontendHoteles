import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-admin-app-usuarios',
  templateUrl: './admin-app-usuarios.component.html',
  styleUrls: ['./admin-app-usuarios.component.css'],
  providers: [UsuarioService],
})
export class AdminAppUsuariosComponent implements OnInit {
  public idUsuarioModel: Usuario;
  public usuariosList: Usuario;
  constructor(private _usuarioService: UsuarioService) {
    this._usuarioService.getIdentidad();
    this.idUsuarioModel = new Usuario('', '', '', '', '', '', '');
    this.verUsuarios();
  }

  ngOnInit(): void {}

  obtenerUsuarioId(idUsuario) {
    this._usuarioService.obtenerUsuarioId(idUsuario).subscribe((response) => {
      this.idUsuarioModel = response.idEncontrado;
      console.log(response);
    });
  }

  verUsuarios() {
    this._usuarioService.verUsuarios().subscribe((response) => {
      this.usuariosList = response.usuariosEncontrados;
    });
  }

  eliminarUsuarios(id) {
    this._usuarioService.eliminarUsuarios(id).subscribe((response) => {
      this.verUsuarios();
    });
  }

  editarUsuario() {
    this._usuarioService
      .editarUsuario(this.idUsuarioModel)
      .subscribe((response) => {
        this.verUsuarios();
      });
  }
}
