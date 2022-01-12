import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { ServiceService } from '../service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-hotel',
  templateUrl: './lista-hotel.component.html',
  styleUrls: ['./lista-hotel.component.css']
})
export class ListaHotelComponent implements OnInit {

  hoteles: Hotel[] = [];

  constructor(
    private serviceService: ServiceService, 
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarHoteles();
  }
  
  cargarHoteles(): void {
    this.serviceService.lista().subscribe(
      data=>{
        this.hoteles = data;
      },
      err=>{
        console.log(err);
      }
    );
  }
  borrar(id: number) {

    alert('borrar el'+ id)
    // this.hotelService.delete(id).subscribe(
    //   data => {
    //     this.toastr.success('Hotel Eliminado', 'OK', {
    //       timeOut: 3000, positionClass: 'toast-top-center'
    //     });
    //     this.cargarHoteles();
    //   },
    //   err => {
    //     this.toastr.error(err.error.mensaje, 'Fail', {
    //       timeOut: 3000,  positionClass: 'toast-top-center',
    //     });
    //   }
    // );
  }
  


}
