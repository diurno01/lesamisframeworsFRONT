import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReservaVuelo } from '../models/reserva-vuelo';
import { ReservaVueloService } from '../service/reserva-vuelo.service';

@Component({
  selector: 'app-lista-reserva-vuelo',
  templateUrl: './lista-reserva-vuelo.component.html',
  styleUrls: ['./lista-reserva-vuelo.component.css']
})
export class ListaReservaVueloComponent implements OnInit {

  reservasVuelo: ReservaVuelo[]= [];

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
