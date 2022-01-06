import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaHotelComponent } from './hotel/lista-hotel.component';
import { DetalleHotelComponent } from './hotel/detalle-hotel.component';
import { NuevoHotelComponent } from './hotel/nuevo-hotel.component';
import { EditarHotelComponent } from './hotel/editar-hotel.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


// external

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
