import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReservaVuelo } from '../models/reserva-vuelo';
import { Sucursal } from '../models/sucursal';
import { Usuario } from '../models/usuario';
import { Vuelo } from '../models/vuelo';
import { ReservaVueloService } from '../service/reserva-vuelo.service';

@Component({
  selector: 'app-lista-reserva-vuelo',
  templateUrl: './lista-reserva-vuelo.component.html',
  styleUrls: ['./lista-reserva-vuelo.component.css']
})
export class ListaReservaVueloComponent implements OnInit {

  reservasVuelo: ReservaVuelo[]= [];
  // usuario: Usuario= {} as Usuario;
  // sucursal: Sucursal = {} as Sucursal;
  // vuelo: Vuelo = {} as Vuelo;

  constructor(
    private  reservaVueloService: ReservaVueloService,
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

  // obtenerUsuario(idUsuario: number): string{
  //   this.reservaVueloService.obtenerUsuario(idUsuario).subscribe(
  //     data=>{
  //       this.usuario= data;
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   )
  //   return this.usuario.nombre+ " " + this.usuario.apellido
  // }

  // obtenerVuelo(idVuelo: number): number{
  //   this.reservaVueloService.obtenerVuelo(idVuelo).subscribe(
  //     data=>{
  //       this.vuelo = data;
  //       console.log(this.vuelo.numeroDeVuelo)
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   )
    
  //   return this.vuelo.numeroDeVuelo
  // }

  // obtenerSucursal(idSucursal: number): string{
  //   this.reservaVueloService.obtenerSucursal(idSucursal).subscribe(
  //     data=>{
  //       this.sucursal = data;
  //     },
  //     err=>{
  //       console.log(err);
  //     }      
  //   )
  //   return this.sucursal.codigo
  // }

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
}
