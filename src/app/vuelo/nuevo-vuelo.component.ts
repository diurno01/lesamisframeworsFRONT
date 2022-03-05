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

    vuelo: Vuelo = {} as Vuelo;
    // currentDate = new Date();
    // vueloForm: FormGroup = {} as FormGroup;     



  constructor(
     private vueloService: VueloService,
     private toastr: ToastrService,
     private router : Router,
    //  public datePipe : DatePipe     
     ) { }

   
  

  ngOnInit() {
    // this.vueloForm = new FormGroup({
    //  numeroDeVuelo : new FormControl(),
    //  fechaYHora : new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd')),
    //  origen  : new FormControl(),
    //  destino : new FormControl(),
    //  plazasPrimeraClase : new FormControl(),
    //  plazasClaseTurista : new FormControl(),
    //  precioPrimeraClase : new FormControl(),
    //  precioClaseTurista : new FormControl()

    // })
  }

  // onSubmit(){
  //   this.vuelo.numeroDeVuelo = this.vueloForm.value.numeroDeVuelo;
  //   this.vuelo.fechaYHora = this.vueloForm.value.fechaYHora;
  //   this.vuelo.origen = this.vueloForm.value.origen;
  //   this.vuelo.destino = this.vueloForm.value.destino;
  //   this.vuelo.plazasPrimeraClase =  this.vueloForm.value.plazasPrimeraClase;
  //   this.vuelo.plazasClaseTurista =  this.vueloForm.value.plazasClaseTurista;
  //   this.vuelo.precioPrimeraClase = this.vueloForm.value.precioPrimeraClase;
  //   this.vuelo.precioClaseturista = this.vueloForm.value.precioClaseTurista;
  //   this.crear();

  // }

  crear(){
   const vuelo = new Vuelo(this.vuelo.numeroDeVuelo, this.vuelo.fechaYHora, this.vuelo.origen, this.vuelo.destino, this.vuelo.plazasPrimeraClase, this.vuelo.plazasClaseTurista, this.vuelo.precioPrimeraClase, this.vuelo.precioClaseturista)
    this.vueloService.crear(this.vuelo).subscribe(
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
        this.router.navigate(['/vuelo'])     
      }
    )
  }

}
