import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Habitaciones } from '../../models/habitaciones.model';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css'],
  providers: [UsuarioService],
})
export class HabitacionesComponent implements OnInit {
  public idHabitacionRuta;
  public habitacionList: Habitaciones;

  constructor(
    private _usuarioService: UsuarioService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((response) => {
      this.idHabitacionRuta = response.get('habitacionID');
      console.log(this.idHabitacionRuta);
    });
    this.verHabitacion(this.idHabitacionRuta);
  }

  verHabitacion(idHabitacion) {
    this._usuarioService.verHabitacion(idHabitacion).subscribe((response) => {
      this.habitacionList = response.habitacionEncontrada;
      // console.log(response.habitacionEncontrada);
    });
  }

  navegarReservaciones(idHabitacion) {
    this._router.navigate(['/reservaciones', idHabitacion]);
  }
}
