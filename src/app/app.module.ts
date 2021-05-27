import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AdminAppHotelesComponent } from './components/admin-app-hoteles/admin-app-hoteles.component';
import { AdminAppComponent } from './components/admin-app/admin-app.component';
import { AdminAppUsuariosComponent } from './components/admin-app-usuarios/admin-app-usuarios.component';
import { AdminHotelComponent } from './components/admin-hotel/admin-hotel.component';
import { AdminHotelEventosComponent } from './components/admin-hotel-eventos/admin-hotel-eventos.component';
import { AdminHotelHabitacionesComponent } from './components/admin-hotel-habitaciones/admin-hotel-habitaciones.component';
import { AdminHotelServiciosComponent } from './components/admin-hotel-servicios/admin-hotel-servicios.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { HomeComponent } from './components/home/home.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdminAppComponent,
    AdminAppHotelesComponent,
    AdminAppUsuariosComponent,
    AdminHotelComponent,
    AdminHotelEventosComponent,
    AdminHotelHabitacionesComponent,
    AdminHotelServiciosComponent,
    HabitacionesComponent,
    HomeComponent,
    HotelesComponent,
    LoginComponent,
    NavbarComponent,
    PerfilComponent,
    RegistroComponent,
    ReservacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
