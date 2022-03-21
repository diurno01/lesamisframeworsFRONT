import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';
import { VueloRequest } from '../models/requests/vuelo-request';
import { Vuelo } from '../models/vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  vueloURL = 'http://localhost:8080/vuelo/';

  constructor(private httpClient: HttpClient) {
   }

   public lista(): Observable<VueloRequest[]> {
    return this.httpClient.get<VueloRequest[]>(this.vueloURL + 'lista');
  }
  
  public crear(vuelo: Vuelo): Observable<any> {
    return this.httpClient.post<any>(this.vueloURL + 'crear', vuelo);
  }

  public detalle(id: number): Observable<Vuelo> {
    return this.httpClient.get<Vuelo>(this.vueloURL + `detalle/${id}`);
  }

  // public detalleNombre(nombre: string): Observable<Vuelo> {
  //   return this.httpClient.get<Vuelo>(this.vueloURL + `detalleNombre/${nombre}`);
  // }

  public actualizar(id: number, vuelo: Vuelo): Observable<any> {
    return this.httpClient.put<any>(this.vueloURL + `actualizar/${id}`, vuelo);
  }

  public delete(vuelo: Vuelo): Observable<any> {
    return this.httpClient.delete<any>(this.vueloURL + `delete/${vuelo.id}`);
  }
}
