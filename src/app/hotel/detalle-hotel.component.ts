import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Hotel } from '../models/hotel';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-detalle-hotel',
  templateUrl: './detalle-hotel.component.html',
  styleUrls: ['./detalle-hotel.component.css']
})
export class DetalleHotelComponent implements OnInit {

  
  hotel: Hotel = <Hotel>{};

  constructor(
    private hotelService: HotelService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.hotelService.detalle(id).subscribe(
      data => {
        this.hotel = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

    volver(){
    this.router.navigate(['/']);
  }
}
 

