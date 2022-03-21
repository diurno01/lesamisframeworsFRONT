import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Login } from '../models/login';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  rol: string= {} as string;
  loginURL = 'http://localhost:8080/login/';

  constructor(private httpClient: HttpClient) {
  }

  public loginUser(login: Login): Observable<Usuario> {    
    return this.httpClient.post<Usuario>(this.loginURL+ `check`, login);
  }

  //llamdo al usuario loggeado

  public obtenerUsuario(): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.loginURL + `usuario`);
  }  

}
