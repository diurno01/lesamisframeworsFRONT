import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sucursal } from '../models/sucursal';
import { SucursalService } from '../service/sucursal.service';

@Component({
  selector: 'app-nuevo-sucursal',
  templateUrl: './nuevo-sucursal.component.html'
})
export class NuevoSucursalComponent implements OnInit {
  codigo: string = '';
  direccion: string = ''; 
  telefono: string = ''

  constructor(
    private sucursalService : SucursalService,
     private toastr: ToastrService,
     private router : Router
  ) { }

  ngOnInit(): void {
  }

  crear(): void {
    const hotel = new Sucursal(this.codigo,this.direccion,this.telefono)
    this.sucursalService.crear(hotel).subscribe(
      data =>{
        this.toastr.success('Sucursal creado','ok',{
          timeOut : 3000,
          positionClass: 'toast-top-center'
        });
        this.router.navigate(['/sucursal'])
      },
      err =>{   
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut : 3000,
          positionClass: 'toast-top-center'          
        });
        this.router.navigate(['/sucursal/nuevo'])     
      }
    )

  }

}
