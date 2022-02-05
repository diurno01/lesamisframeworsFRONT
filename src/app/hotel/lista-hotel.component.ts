import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelService } from '../service/hotel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-hotel',
  templateUrl: './lista-hotel.component.html',
  styleUrls: ['./lista-hotel.component.css']
})
export class ListaHotelComponent implements OnInit {

  hoteles: Hotel[] = [];

  constructor(
    private hotelService: HotelService, 
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarHoteles();
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
  borrar(hotel: Hotel) {

    // alert('borrar el'+ id)
    this.hotelService.delete(hotel).subscribe(
      data => {
        this.toastr.success('Hotel Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarHoteles();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }
  


}
