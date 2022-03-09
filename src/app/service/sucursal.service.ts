import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal } from '../models/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  sucursalURL = 'http://localhost:8080/sucursal/';

  constructor(private httpClient: HttpClient) { 
  }

  public lista(): Observable<Sucursal[]> {
    return this.httpClient.get<Sucursal[]>(this.sucursalURL + 'lista');
  }
  
  public crear(sucursal: Sucursal): Observable<any> {
    return this.httpClient.post<any>(this.sucursalURL + 'crear', sucursal);
  }

  public detalle(id: number): Observable<Sucursal> {
    return this.httpClient.get<Sucursal>(this.sucursalURL + `detalle/${id}`);
  }

  public detalleNombre(nombre: string): Observable<Sucursal> {
    return this.httpClient.get<Sucursal>(this.sucursalURL + `detalleNombre/${nombre}`);
  }

  public actualizar(id: number, sucursal: Sucursal): Observable<any> {
    return this.httpClient.put<any>(this.sucursalURL + `actualizar/${id}`, sucursal);
  }

  public delete(sucursal: Sucursal): Observable<any> {
    return this.httpClient.delete<any>(this.sucursalURL + `delete/${sucursal.id}`);
  }
}
