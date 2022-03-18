import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Sucursal } from '../models/sucursal';
import { SucursalService } from '../service/sucursal.service';

@Component({
  selector: 'app-lista-sucursal',
  templateUrl: './lista-sucursal.component.html',
  styleUrls: ['./lista-sucursal.component.css']
})
export class ListaSucursalComponent implements OnInit {

  sucursales : Sucursal[]= [];

  constructor(
    private sucursalService:  SucursalService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cargarSucursales();
  }

  cargarSucursales(): void {
    this.sucursalService.lista().subscribe(
      data=>{
        this.sucursales = data;
      },
      err=>{
        console.log(err);
      }
    );
  }
  borrar(sucursal: Sucursal) {

    this.sucursalService.delete(sucursal).subscribe(
      data => {
        this.toastr.success('Sucursal Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarSucursales();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );

  }
}
