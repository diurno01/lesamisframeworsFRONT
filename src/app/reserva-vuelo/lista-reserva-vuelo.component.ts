import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReservaVuelo } from '../models/reserva-vuelo';
import { Sucursal } from '../models/sucursal';
import { Usuario } from '../models/usuario';
import { Vuelo } from '../models/vuelo';
import { LoginService } from '../service/login.service';
import { ReservaVueloService } from '../service/reserva-vuelo.service';

@Component({
  selector: 'app-lista-reserva-vuelo',
  templateUrl: './lista-reserva-vuelo.component.html'
})
export class ListaReservaVueloComponent implements OnInit {

  reservasVuelo: ReservaVuelo[]= [];
  usuarioLogeado: Usuario= {} as Usuario;


  constructor(
    private loginService: LoginService,
    private router : Router,
    private reservaVueloService: ReservaVueloService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cargarReservasVuelo();
  }

  cargarReservasVuelo(): void {
    this.reservaVueloService.lista().subscribe(
      data=>{
        this.reservasVuelo = data;
      },
      err=>{
        console.log(err);
      }
    );
  }

 
  borrar(reservaVuelo: ReservaVuelo) {
    this.reservaVueloService.delete(reservaVuelo).subscribe(
      data => {
        this.toastr.success('Reserva Vuelo Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarReservasVuelo();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.loginService.obtenerUsuario().subscribe(
      data=>{
        this.toastr.success('','ok',{
          timeOut : 3000,
          positionClass: 'toast-top-center'
        });
       this.usuarioLogeado = data; 
        
       if(this.usuarioLogeado.tipo == "ADMIN"){
        this.router.navigate(['/menu-admin']) 
       }else{
        this.router.navigate(['/menu-vendedor'])
       }

      //  if(this.usuarioLogeado.tipo == "VENDEDOR"){
      //   this.router.navigate(['/menu-vendedor'])
      //  }     
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
