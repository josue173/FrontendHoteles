import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public usuarioModel: Usuario;
  public token;
  public identidad; //GUARDA LOS DATOS DEL USUARIO LOGEADO
  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {
    this.usuarioModel = new Usuario('', '', '', '', '', '', '');
    this._usuarioService.getIdentidad();
  }

  ngOnInit(): void {}

  login() {
    this._usuarioService.login(this.usuarioModel).subscribe(
      (response) => {
        this.identidad = response.usuariosEncontrado;
        localStorage.setItem('identidad', JSON.stringify(this.identidad));
        this.getToken();
        this._router.navigate(['/home']);
      },
      (error) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Email o Contraseña incorrectos',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }

  getToken() {
    this._usuarioService.login(this.usuarioModel, 'true').subscribe(
      (response) => {
        this.token = response.Token;
        localStorage.setItem('token', this.token);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
