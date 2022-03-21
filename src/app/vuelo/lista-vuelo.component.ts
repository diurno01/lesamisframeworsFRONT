import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VueloRequest } from '../models/requests/vuelo-request';
import { Vuelo } from '../models/vuelo';
import { ReservaVueloService } from '../service/reserva-vuelo.service';
import { VueloService } from '../service/vuelo.service';

@Component({
  selector: 'app-lista-vuelo',
  templateUrl: './lista-vuelo.component.html',
  providers: [DatePipe]
})
export class ListaVueloComponent implements OnInit {
  vuelos: VueloRequest[] = [];
  // datePipe: DatePipe = {} as DatePipe;
  dateString: string = "";
  reservasTuristas: number = 0;

  constructor(
    private reservaVueloService: ReservaVueloService,
    private vueloService: VueloService, 
    private toastr: ToastrService,
    public datePipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.cargarVuelos();
  }

  cargarVuelos(): void {
    this.vueloService.lista().subscribe(
      data=>{
        this.vuelos = data;
        console.log(this.vuelos)
      },
      err=>{
        console.log(err);
      }
    );
  }
  
  vuelosTurista(id: number ): number {
    this.reservaVueloService.reservasTuristas(id).subscribe(
      data=>{
        this.reservasTuristas = data;
        console.log(this.vuelos)
        
      },
      err=>{
        console.log(err);
        
      }
   );
      return this.reservasTuristas;
  }

  borrar(vuelo: Vuelo) {

    // alert('borrar el'+ id)
    this.vueloService.delete(vuelo).subscribe(
      data => {
        this.toastr.success('Vuelo Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarVuelos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  parseDate(date: Date){

    return this.datePipe.transform(date,'dd/mm/yyyy, h:mm a')    

  }


}
