import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Hotel } from '../models/hotel';
import { HotelRequest } from '../models/requests/hotel-request';
import { ReservaHotelRequest } from '../models/requests/reserva-hotel-request';
import { Sucursal } from '../models/sucursal';
import { Usuario } from '../models/usuario';
import { HotelService } from '../service/hotel.service';
import { ReservaHotelService } from '../service/reserva-hotel.service';
import { SucursalService } from '../service/sucursal.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-nuevo-reserva-hotel',
  templateUrl: './nuevo-reserva-hotel.component.html'
})
export class NuevoReservaHotelComponent implements OnInit {

  usuarios: Usuario[]=[];
  hoteles: HotelRequest[]=[];
  pensiones: string[]=["PENSION_COMPLETA","MEDIA_PENSION"];
  sucursales: Sucursal[]=[];
  fechaDeIngreso: Date= {} as Date;
  fechaDeEgreso: Date= {} as Date;

  idUsuario: number ={} as number;
  idHotel: number ={} as number;
  pension: string ={} as string;
  idSucursal: number ={} as number;

  constructor(
    private reservaHotelService: ReservaHotelService,
    private usuarioService: UsuarioService,
    private hotelService: HotelService,
    private sucursalService: SucursalService,
    private toastr: ToastrService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.cargarClientes();
    this.cargarSucursales();
    this.cargarHoteles();
  }

  //idUsuario: number,idHotel: number, pension: string,idSucursal: number,fechaDeIngreso: Date, fechaDeEgreso: Date

  crear(): void {
    const reservaHotel = new ReservaHotelRequest( this.idUsuario, this.idHotel, this.pension, this.idSucursal, this.fechaDeIngreso,this.fechaDeEgreso);
    this.reservaHotelService.crear(reservaHotel).subscribe(
      data =>{
        this.toastr.success('Reserva hotel ha sido creada exitosamente','ok',{
          timeOut : 3000,
          positionClass: 'toast-top-center'
        });
        this.router.navigate(['/reservahotel'])
      },
      err =>{   
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut : 3000,
          positionClass: 'toast-top-center'          
        });
        this.router.navigate(['/reservahotel/nuevo'])     
      }
    )

  }

  cargarHoteles(): void {
    this.hotelService.lista().subscribe(
      data=>{
        this.hoteles = data;
      },
      err=>{
        console.log(err);
      }
    );
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
}
