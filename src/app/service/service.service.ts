
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel} from '../models/hotel';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  hotelURL = 'http://localhost:8080/hotel/';

  constructor(private httpClient: HttpClient) {
   }

   public lista(): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(this.hotelURL + 'lista');
  }

  
  public crear(hotel: Hotel): Observable<any> {
    return this.httpClient.post<any>(this.hotelURL + 'crear', hotel);
  }

  public detalle(id: number): Observable<Hotel> {
    return this.httpClient.get<Hotel>(this.hotelURL + `detalle/${id}`);
  }

  public detalleNombre(nombre: string): Observable<Hotel> {
    return this.httpClient.get<Hotel>(this.hotelURL + `detalleNombre/${nombre}`);
  }

  public actualizar(id: number, hotel: Hotel): Observable<any> {
    return this.httpClient.put<any>(this.hotelURL + `actualizar/${id}`, hotel);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.hotelURL + `delete/${id}`);
  }
}
