import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vuelo } from '../models/vuelo';
import { VueloService } from '../service/vuelo.service';

@Component({
  selector: 'app-detalle-vuelo',
  templateUrl: './detalle-vuelo.component.html'
})
export class DetalleVueloComponent implements OnInit {

  vuelo: Vuelo = {} as Vuelo;

  constructor(
    private vueloService : VueloService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.vueloService.detalle(id).subscribe(
      data => {
        this.vuelo = data;
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
    this.router.navigate(['/vuelo']);
  }

}
