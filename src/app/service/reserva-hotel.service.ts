import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservaHotelRequest } from '../models/requests/reserva-hotel-request';
import { ReservaHotel } from '../models/reserva-hotel';
import { Sucursal } from '../models/sucursal';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ReservaHotelService {
  reservaHotelURL = 'http://localhost:8080/reservasHotel/';

  usuarioURL = 'http://localhost:8080/usuario/';
  
  sucursalURL = 'http://localhost:8080/sucursal/';

  hotelURL = 'http://localhost:8080/Hotel/';

  loginURL = 'http://localhost:8080/login/';

  constructor(
    private httpClient: HttpClient
    ) { }

  //reserva crud

  public lista(): Observable<ReservaHotel[]> {
    return this.httpClient.get<ReservaHotel[]>(this.reservaHotelURL + 'lista');
  }
  
  public crear(reservaVuelo : ReservaHotelRequest): Observable<any> {
    return this.httpClient.post<any>(this.reservaHotelURL + 'crear', reservaVuelo);
  }
  //detalle atravez de idUsuario
  public detalle(id: number | undefined): Observable<ReservaHotel[]> {
    return this.httpClient.get<ReservaHotel[]>(this.reservaHotelURL + `detalle/${id}`);
  }

  public actualizar(id: number, reservaHotel: ReservaHotel): Observable<any> {
    return this.httpClient.put<any>(this.reservaHotelURL + `actualizar/${id}`, reservaHotel);
  }

  public delete(reservaHotel: ReservaHotel): Observable<any> {
    return this.httpClient.delete<any>(this.reservaHotelURL + `delete/${reservaHotel.id}`);
  }

  //llamado a usuarios

  public listaUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL + 'lista');
  }
    
  //llamado a sucursales

  public listaSucursales(): Observable<Sucursal[]> {
    return this.httpClient.get<Sucursal[]>(this.sucursalURL + 'lista');
  }

}
