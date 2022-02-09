import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : Login =  {} as Login;

  constructor(private loginservice : LoginService) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.login)
    this.loginservice.loginUser(this.login).subscribe(
      data=>{
        alert("login exitoso")
      },error=>alert("login fallo")
    )
  }
}
