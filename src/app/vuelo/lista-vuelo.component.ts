import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Vuelo } from '../models/vuelo';
import { VueloService } from '../service/vuelo.service';

@Component({
  selector: 'app-lista-vuelo',
  templateUrl: './lista-vuelo.component.html',
  styleUrls: ['./lista-vuelo.component.css'],
  providers: [DatePipe]
})
export class ListaVueloComponent implements OnInit {
  vuelos: Vuelo[] = [];
  // datePipe: DatePipe = {} as DatePipe;
  dateString: string = "";

  constructor(
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
    console.log(date)
    // var datePipe = new DatePipe("en-US");
    //  return this.datePipe.transform(date, 'yyyy-MM-dd');
    // var ddMMyyyy = this.datePipe.transform(date,"dd-MM-yyyy");
 
    return this.datePipe.transform(date,'dd/mm/yyyy, h:mm a')
    // return date.toISOString
    

  }


}
