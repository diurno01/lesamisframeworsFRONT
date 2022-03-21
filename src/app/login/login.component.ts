import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from '../service/login.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  login : Login =  {} as Login;
  usuario: Usuario = {} as Usuario;
  id : number = 0;

  constructor(
    private loginservice : LoginService,
    private toastr: ToastrService,
    private router : Router,
    private httpclien: HttpClient
    ) { }

  ngOnInit(): void {
  }

  loginUser(){
    // console.log(this.login)
    this.loginservice.loginUser(this.login).subscribe(
      data=>{
        this.toastr.success('Login exitoso','ok',{
          timeOut : 3000,
          positionClass: 'toast-top-center'
        });
       this.usuario = data; 
        
       if(this.usuario.tipo == "ADMIN"){
        this.router.navigate(['/menu-admin']) 
       }   

       if(this.usuario.tipo == "VENDEDOR"){
        this.router.navigate(['/menu-vendedor'])
       }

       if(this.usuario.tipo == "CLIENTE"){
         this.router.navigate(['/menu-cliente'])
       }

      },err=>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut : 3000,
          positionClass: 'toast-top-center'   
        });       
        this.router.navigate(['/login']) 
      }
    )
  }

}