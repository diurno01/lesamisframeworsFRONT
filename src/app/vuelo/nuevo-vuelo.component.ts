// import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vuelo } from '../models/vuelo';
import { VueloService } from '../service/vuelo.service';

@Component({
  selector: 'app-nuevo-vuelo',
  templateUrl: './nuevo-vuelo.component.html',
  styleUrls: ['./nuevo-vuelo.component.css']
})
export class NuevoVueloComponent implements OnInit {

    numeroDeVuelo: number= {} as number;
    fechaYHora: Date=  {} as Date;
    origen: string="";
    destino: string="";
    plazasPrimeraClase: number= {} as number;
    plazasClaseTurista: number= {} as number;
    precioPrimeraClase: number= {} as number;
    precioClaseturista: number= {} as number;

 


  constructor(
     private vueloService: VueloService,
     private toastr: ToastrService,
     private router : Router,
     ) { }

   
  

  ngOnInit() {
 
  }


  crear(){
   const vuelo = new Vuelo(this.numeroDeVuelo, this.fechaYHora, this.origen, this.destino, this.plazasPrimeraClase, this.plazasClaseTurista, this.precioPrimeraClase, this.precioClaseturista)
    this.vueloService.crear(vuelo).subscribe(
      data =>{
        this.toastr.success('Vuelo creado','ok',{
          timeOut : 3000,
          positionClass: 'toast-top-center'
        });
        this.router.navigate(['/vuelo'])
      },
      err =>{   
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut : 3000,
          positionClass: 'toast-top-center'          
        });
        this.router.navigate(['/vuelo/nuevo'])     
      }
    )
  }

}
