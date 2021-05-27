import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Hoteles } from '../../models/hoteles.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UsuarioService],
})
export class HomeComponent implements OnInit {
  public hotelesList: Hoteles; //ALMACENA LOS USUARIOS OBTENIDOS DE LA BASE DE DATOS
  public hotelModel: Hoteles;
  public imagenPrincipal: Hoteles;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {
    this._usuarioService.getIdentidad();
  }

  ngOnInit(): void {
    this.verHoteles();
    this.hotelModel = new Hoteles('', '', '', '', '', '');
  }

  verHoteles() {
    this._usuarioService.verHoteles().subscribe(
      (response) => {
        this.hotelesList = response.hotelesEncontrados;
        this.imagenPrincipal = response.hotelesEncontrados.imagen;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  navegarHotel(idHotel) {
    this._router.navigate(['/hotel', idHotel]);
  }
}
