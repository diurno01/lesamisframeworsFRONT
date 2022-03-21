import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReservaVueloRequest } from '../models/requests/reserva-vuelo-request';
import { VueloRequest } from '../models/requests/vuelo-request';
import { Sucursal } from '../models/sucursal';
import { Usuario } from '../models/usuario';
import { Vuelo } from '../models/vuelo';
import { ReservaVueloService } from '../service/reserva-vuelo.service';
import { SucursalService } from '../service/sucursal.service';
import { UsuarioService } from '../service/usuario.service';
import { VueloService } from '../service/vuelo.service';

@Component({
  selector: 'app-nuevo-reserva-vuelo',
  templateUrl: './nuevo-reserva-vuelo.component.html'
})
export class NuevoReservaVueloComponent implements OnInit {

   usuarios: Usuario[]=[];
   sucursales: Sucursal[]=[];
   vuelos: VueloRequest[]=[];  
   clases: string[]=["PRIMERA_CLASE","CLASE_TURISTA"];

  //  usuario: Usuario = {} as Usuario;
  //  vuelo: Vuelo = {} as Vuelo;
  //  surcusal: Sucursal = {} as Sucursal;

   clase: string = {} as string;
   idUsuario: number= {} as number;
   idVuelo: number= {} as number;
   idSucursal: number= {} as number;



  constructor(
    private reservaVueloService: ReservaVueloService,
    private vueloService: VueloService,
    private sucursalService: SucursalService,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.cargarVuelos();
    this.cargarSucursales();
    this.cargarClientes();
  }

  // clase: string, idUsuario: number, idVuelo: number,  idSucursal: number

  crear(): void {
    const reservaVuelo = new ReservaVueloRequest(this.clase,this.idUsuario,this.idVuelo,this.idSucursal)
    this.reservaVueloService.crear(reservaVuelo).subscribe(
      data =>{
        this.toastr.success('Reserva vuelo ha sido creada exitosamente','ok',{
          timeOut : 3000,
          positionClass: 'toast-top-center'
        });
        this.router.navigate(['/reservavuelo'])
      },
      err =>{   
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut : 3000,
          positionClass: 'toast-top-center'          
        });
        this.router.navigate(['/reservavuelo'])     
      }
    )

  }

  cargarClientes(): void {
    this.usuarioService.listaClientes().subscribe(
      data=>{
        this.usuarios = data;       
        console.log(this.usuarios)
      },
      err=>{
        console.log(err);
        console.log("error fallo lista")
      }      
    );
  }
  cargarSucursales(): void {
    this.sucursalService.lista().subscribe(
      data=>{
        this.sucursales = data;
        console.log(this.sucursales)
      },
      err=>{
        console.log(err);
      }
    );
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
}
