import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Login } from '../models/login';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  loginURL = 'http://localhost:8080/login/';

  constructor(private httpClient: HttpClient) {
  }

  public loginUser(login: Login): Observable<object> {
    return this.httpClient.post<Usuario>(this.loginURL, login);
  }

}
