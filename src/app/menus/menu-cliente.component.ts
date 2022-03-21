import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReservaHotel } from '../models/reserva-hotel';
import { ReservaVuelo } from '../models/reserva-vuelo';
import { Usuario } from '../models/usuario';
import { LoginService } from '../service/login.service';
import { ReservaHotelService } from '../service/reserva-hotel.service';
import { ReservaVueloService } from '../service/reserva-vuelo.service';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html'
})
export class MenuClienteComponent implements OnInit {

  reservasVuelo: ReservaVuelo[]=[];
  reservasHotel: ReservaHotel[]=[];
  usuarioLogeado: Usuario={} as Usuario;
  idUser: number= {} as number;

  constructor(
    private reservaVueloService: ReservaVueloService,
    private reservaHotelService: ReservaHotelService,
    private toastr: ToastrService,
    private loginService: LoginService

  ) { }

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas(): void {
    this.loginService.obtenerUsuario().subscribe(
      data=>{
        this.toastr.success('','ok',{
          timeOut : 3,
          positionClass: 'toast-top-center'
        });
       this.usuarioLogeado = data; 
          console.log(this.usuarioLogeado.id)
          this.reservaVueloService.detalle(this.usuarioLogeado.id).subscribe(
            data=>{
              this.reservasVuelo = data;
              console.log(this.reservasVuelo)
            },
            err=>{
              console.log(err);
            }
          );
          this.reservaHotelService.detalle(this.usuarioLogeado.id).subscribe(
            data=>{
              this.reservasHotel = data;
              console.log(this.reservasHotel);
            },
            err=>{
              console.log(err);
            }
          );
        


      }
    )
  }

  // cargarReservasVuelo(id: number): void {
  //   this.reservaVueloService.detalle(id).subscribe(
  //     data=>{
  //       this.reservasVuelo = data;
  //       console.log(this.reservasVuelo)
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   );
  // }  

  // cargarReservasHotel(): void {
  //   this.reservaHotelService.detalle(1).subscribe(
  //     data=>{
  //       this.reservasHotel = data;
  //       console.log(this.reservasHotel);
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   );
  // }


}
