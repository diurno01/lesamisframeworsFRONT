import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sucursal } from '../models/sucursal';
import { SucursalService } from '../service/sucursal.service';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {

  sucursal: Sucursal= {} as Sucursal;

  constructor(
    private sucursalService: SucursalService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

 
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sucursalService.detalle(id).subscribe(
      data => {
        this.sucursal = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/sucursal']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sucursalService.actualizar(id, this.sucursal).subscribe(
      data => {
        this.toastr.success('Sucursal Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/sucursal']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/sucursal']);
      }
    );
  }

}
