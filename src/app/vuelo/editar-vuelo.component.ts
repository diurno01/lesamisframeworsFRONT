import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vuelo } from '../models/vuelo';
import { VueloService } from '../service/vuelo.service';

@Component({
  selector: 'app-editar-vuelo',
  templateUrl: './editar-vuelo.component.html'
})
export class EditarVueloComponent implements OnInit {

  vuelo: Vuelo= {} as Vuelo;

  constructor(
    private vueloService: VueloService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.vueloService.detalle(id).subscribe(
      data => {
        this.vuelo = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/vuelo']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.vueloService.actualizar(id, this.vuelo).subscribe(
      data => {
        this.toastr.success('Vuelo Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/vuelo']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/vuelo/editar']);
      }
    );
  }
}
