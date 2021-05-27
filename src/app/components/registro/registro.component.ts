import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UsuarioService],
})
export class RegistroComponent implements OnInit {
  public usuariosModel: Usuario;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {
    this.usuariosModel = new Usuario('', '', '', '', '', '', '');
  }

  ngOnInit(): void {}

  registrar() {
    this._usuarioService.registro(this.usuariosModel).subscribe(
      (response) => {
        console.log(response);
        this._router.navigate(['/home']);
      },
      (error) => {
        console.log(<any>error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'El usuario ya existe',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
