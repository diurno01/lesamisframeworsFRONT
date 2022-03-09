import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservaVuelo } from '../models/reserva-vuelo';
import { Sucursal } from '../models/sucursal';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ReservaVueloService {

  reservaVueloURL = 'http://localhost:8080/reservasVuelo/';

  usuarioURL = 'http://localhost:8080/usuario/';
  
  sucursalURL = 'http://localhost:8080/sucursal/';



  constructor(private httpClient: HttpClient) { }

  //reserva crud

  public lista(): Observable<ReservaVuelo[]> {
    return this.httpClient.get<ReservaVuelo[]>(this.reservaVueloURL + 'lista');
  }
  
  public crear(reservaVuelo : ReservaVuelo): Observable<any> {
    return this.httpClient.post<any>(this.reservaVueloURL + 'crear', reservaVuelo);
  }
  //detalle atravez de idUsuario
  public detalle(id: number): Observable<ReservaVuelo> {
    return this.httpClient.get<ReservaVuelo>(this.reservaVueloURL + `detalle/${id}`);
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
  

}
