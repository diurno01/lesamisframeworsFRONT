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

  constructor(
    private usuarioService: UsuarioService, 
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarUsuarios;
  }

  cargarUsuarios(): void {
    this.usuarioService.lista().subscribe(
      data=>{
        this.usuarios = data;
      },
      err=>{
        console.log(err);
      }      
    );
  }

  borrar(usuario: Usuario) {

    // alert('borrar el'+ id)
    this.usuarioService.delete(usuario).subscribe(
      data => {
        this.toastr.success('Hotel Eliminado', 'OK', {
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
