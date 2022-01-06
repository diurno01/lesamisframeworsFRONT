import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-lista-hotel',
  templateUrl: './lista-hotel.component.html',
  styleUrls: ['./lista-hotel.component.css']
})
export class ListaHotelComponent implements OnInit {

  hoteles: Hotel[] = [];

  constructor(private hotelService: HotelService) { }

  
  cargarHoteles(): void{
    this.hotelService.lista().subscribe(
      data=> {
        this.hoteles= data;
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
    this.cargarHoteles();
  }


}
