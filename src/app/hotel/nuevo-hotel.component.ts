import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Hotel } from '../models/hotel';
import { HotelService } from '../service/hotel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevo-hotel',
  templateUrl: './nuevo-hotel.component.html',
  styleUrls: ['./nuevo-hotel.component.css']
})
export class NuevoHotelComponent implements OnInit {

  nombre: string = '';
  direccion: string = ''; 
  ciudad: string = '';
  telefono: string = '';
  numeroDePlazas: number = 0;
  precioPensionCompleta: number = 0;
  precioMediaPension: number = 0;

  constructor(
     private hotelService : HotelService,
     private toastr: ToastrService,
     private router : Router
    ) { }

  ngOnInit(): void {
  }

  crear(): void {
    const hotel = new Hotel(this.nombre,this.direccion,this.ciudad,this.telefono,this.numeroDePlazas,this.precioPensionCompleta,this.precioMediaPension)
    this.hotelService.crear(hotel).subscribe(
      data =>{
        this.toastr.success('Hotel creado','ok',{
          timeOut : 3000,
          positionClass: 'toast-top-center'
        });
        this.router.navigate(['/'])
      },
      err =>{   
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut : 3000,
          positionClass: 'toast-top-center'          
        });
        this.router.navigate(['/'])     
      }
    )

  }

}
