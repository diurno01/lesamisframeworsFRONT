import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioURL = 'http://localhost:8080/usuario/';

  constructor(private httpClient: HttpClient) {    
   }

  public lista(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL + 'lista');
  }
  
//falta hacer el llamado desde la base de datos para las sucursales

public crear(usuario: Usuario): Observable<any> {
  return this.httpClient.post<any>(this.usuarioURL + 'crear', usuario);
}

public detalle(id: number): Observable<Usuario> {
  return this.httpClient.get<Usuario>(this.usuarioURL + `detalle/${id}`);
}

public detalleNombre(dni: number): Observable<Usuario> {
  return this.httpClient.get<Usuario>(this.usuarioURL + `dni/${dni}`);
}

public actualizar(id: number, usuario: Usuario): Observable<any> {
  return this.httpClient.put<any>(this.usuarioURL + `actualizar/${id}`, usuario);
}

public delete(usuario: Usuario): Observable<any> {
  return this.httpClient.delete<any>(this.usuarioURL + `delete/${usuario.id}`);
}
}


