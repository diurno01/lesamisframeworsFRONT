import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[]=[];
  botonEliminar: string={} as string;
  // show: boolean={} as boolean;

  constructor(
    private usuarioService: UsuarioService, 
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuarioService.lista().subscribe(
      data=>{
        this.usuarios = data;       
        console.log(this.usuarios)
      },
      err=>{
        console.log(err);
        console.log("error fallo lista")
      }      
    );
  }

  borrar(usuario: Usuario) {
    this.usuarioService.delete(usuario).subscribe(
      data => {
        this.toastr.success('Usuario Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarUsuarios();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
