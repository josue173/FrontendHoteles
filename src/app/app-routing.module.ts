import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdminAppComponent } from './components/admin-app/admin-app.component';
import { AdminHotelComponent } from './components/admin-hotel/admin-hotel.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { AdminAppUsuariosComponent } from './components/admin-app-usuarios/admin-app-usuarios.component';
import { AdminAppHotelesComponent } from './components/admin-app-hoteles/admin-app-hoteles.component';
import { AdminHotelHabitacionesComponent } from './components/admin-hotel-habitaciones/admin-hotel-habitaciones.component';
import { AdminHotelEventosComponent } from './components/admin-hotel-eventos/admin-hotel-eventos.component';
import { AdminHotelServiciosComponent } from './components/admin-hotel-servicios/admin-hotel-servicios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistroComponent },
  { path: 'adminApp', component: AdminAppComponent },
  { path: 'adminAppUsuarios', component: AdminAppUsuariosComponent },
  { path: 'adminAppHoteles', component: AdminAppHotelesComponent },
  { path: 'adminHotel', component: AdminHotelComponent },
  {
    path: 'adminHotelHabitaciones',
    component: AdminHotelHabitacionesComponent,
  },
  {
    path: 'adminHotelEventos',
    component: AdminHotelEventosComponent,
  },
  {
    path: 'adminHotelServicios',
    component: AdminHotelServiciosComponent,
  },
  { path: 'perfil', component: PerfilComponent },
  { path: 'hotel/:hotelID', component: HotelesComponent },
  { path: 'habitaciones/:habitacionID', component: HabitacionesComponent },
  {
    path: 'reservaciones/:habitacionReservaID',
    component: ReservacionesComponent,
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
