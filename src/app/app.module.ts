import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//hotel
import { ListaHotelComponent } from './hotel/lista-hotel.component';
import { DetalleHotelComponent } from './hotel/detalle-hotel.component';
import { NuevoHotelComponent } from './hotel/nuevo-hotel.component';
import { EditarHotelComponent } from './hotel/editar-hotel.component';

//login

import { LoginComponent } from './login/login.component';

//services

import {HotelService} from './service/hotel.service'

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


// external

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './utilities/header.component';
import { LoginService } from './service/login.service';
import { MenuAdminComponent } from './menus/menu-admin.component';
import { MenuVendedorComponent } from './menus/menu-vendedor.component';
import { MenuClienteComponent } from './menus/menu-cliente.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { UsuarioService } from './service/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaHotelComponent,
    DetalleHotelComponent,
    NuevoHotelComponent,
    EditarHotelComponent,
    HeaderComponent,
    LoginComponent,
    MenuAdminComponent,
    MenuVendedorComponent,
    MenuClienteComponent,
    DetalleUsuarioComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    ListaUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [HotelService,LoginService,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
