import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from '../service/login.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : Login =  {} as Login;
  usuario: Usuario = {} as Usuario;
  id : number = 0;

  constructor(
    private loginservice : LoginService,
    private toastr: ToastrService,
    private router : Router) { }

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
        this.router.navigate(['/menu-admin',{ id: this.usuario.id }]) 
       }   

       if(this.usuario.tipo == "VENDEDOR"){
        this.router.navigate(['/menu-vendedor',{ id: this.usuario.id }])
       }

       if(this.usuario.tipo == "CLIENTE"){
         this.router.navigate(['/menu-cliente',{ id: this.usuario.id }])
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

  // cargarHoteles(): void {
  //   this.hotelService.lista().subscribe(
  //     data=>{
  //       this.hoteles = data;
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   );
  // }

}