import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Hotel } from '../models/hotel';
import { ReservaHotel } from '../models/reserva-hotel';
import { Usuario } from '../models/usuario';
import { LoginService } from '../service/login.service';
import { ReservaHotelService } from '../service/reserva-hotel.service';

@Component({
  selector: 'app-lista-reserva-hotel',
  templateUrl: './lista-reserva-hotel.component.html',
  // styleUrls: ['./lista-reserva-hotel.component.css']
})
export class ListaReservaHotelComponent implements OnInit {

  reservasHotel: ReservaHotel[]=[];
  usuarioLogeado: Usuario={} as Usuario;

  constructor(
    private loginService : LoginService,
    private router : Router,
    private reservaHotelService : ReservaHotelService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cargarReservasHotel();
  }

  cargarReservasHotel(): void {
    this.reservaHotelService.lista().subscribe(
      data=>{
        this.reservasHotel = data;
        console.log(this.reservasHotel);
      },
      err=>{
        console.log(err);
      }
    );
  }

 
  borrar(reservaHotel: ReservaHotel) {
    this.reservaHotelService.delete(reservaHotel).subscribe(
      data => {
        this.toastr.success('Reserva Vuelo Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarReservasHotel();
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
