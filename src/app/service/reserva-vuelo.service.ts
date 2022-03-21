import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservaVueloRequest } from '../models/requests/reserva-vuelo-request';
import { ReservaVuelo } from '../models/reserva-vuelo';
import { Sucursal } from '../models/sucursal';
import { Usuario } from '../models/usuario';
import { Vuelo } from '../models/vuelo';

@Injectable({
  providedIn: 'root'
})
export class ReservaVueloService {

  reservaVueloURL = 'http://localhost:8080/reservasvuelo/';

  usuarioURL = 'http://localhost:8080/usuario/';
  
  sucursalURL = 'http://localhost:8080/sucursal/';

  vueloURL = 'http://localhost:8080/vuelo/';

  loginURL = 'http://localhost:8080/login/';

  constructor(private httpClient: HttpClient) { }

  //reserva crud

  public lista(): Observable<ReservaVuelo[]> {
    return this.httpClient.get<ReservaVuelo[]>(this.reservaVueloURL + 'lista');
  }
  
  public crear(reservaVuelo : ReservaVueloRequest): Observable<any> {
    return this.httpClient.post<any>(this.reservaVueloURL + 'crear', reservaVuelo);
  }
  //detalle atravez de idUsuario
  public detalle(id: number | undefined): Observable<ReservaVuelo[]> {
    return this.httpClient.get<ReservaVuelo[]>(this.reservaVueloURL + `detalle/${id}`);
  }
  //<!--restar ReservaVuelo-findByIdAndClase.lenght-->
  public reservasTuristas(id: number): Observable<number> {
    return this.httpClient.get<number>(this.reservaVueloURL + `reservaturista/${id}`);
  }


  public actualizar(id: number, reservaVuelo: ReservaVuelo): Observable<any> {
    return this.httpClient.put<any>(this.reservaVueloURL + `actualizar/${id}`, reservaVuelo);
  }

  public delete(reservaVuelo: ReservaVuelo): Observable<any> {
    return this.httpClient.delete<any>(this.reservaVueloURL + `delete/${reservaVuelo.id}`);
  }

  //llamado a usuarios

  public listaUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL + 'lista');
  }
  
  //llamado a sucursales

  public listaSucursales(): Observable<Sucursal[]> {
    return this.httpClient.get<Sucursal[]>(this.sucursalURL + 'lista');
  }

  public obtenerSucursal(id: number): Observable<Sucursal> {
    return this.httpClient.get<Sucursal>(this.sucursalURL + `detalle/${id}`);
  }  

  //llamado a vuelos

  public listaVuelos(): Observable<Vuelo[]> {
    return this.httpClient.get<Vuelo[]>(this.vueloURL + 'lista');
  }

  public obtenerVuelo(id: number): Observable<Vuelo> {
    return this.httpClient.get<Vuelo>(this.vueloURL + `detalle/${id}`);
  }

}
