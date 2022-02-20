import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Vuelo } from '../models/vuelo';
import { VueloService } from '../service/vuelo.service';

@Component({
  selector: 'app-lista-vuelo',
  templateUrl: './lista-vuelo.component.html',
  styleUrls: ['./lista-vuelo.component.css']
})
export class ListaVueloComponent implements OnInit {
  vuelos: Vuelo[] = [];

  constructor(
    private vueloService: VueloService, 
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarVuelos();
  }

  cargarVuelos(): void {
    this.vueloService.lista().subscribe(
      data=>{
        this.vuelos = data;
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


}
