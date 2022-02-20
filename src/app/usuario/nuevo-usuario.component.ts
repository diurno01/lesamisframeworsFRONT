import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  usuario: string= '';
  password: string='';
  dni: number= 0;
  nombre: string='';
  apellido: string= '';
  direccion: string='';
  telefono: string='';
  email: string='';
  sucursal: string='';
  tipo: string='';
  lista: string[]=["VENDEDOR","CLIENTE"];
  sucursales: string[]=["Principal","Las Tunas"];//falta hacer el llamado desde la base de datos para las sucursales

  constructor(
    private usuarioService : UsuarioService,
    private toastr: ToastrService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  crear(): void {
    const usuario = new Usuario (this.usuario, this.password, this.dni, this.nombre, this.apellido, this.direccion, this.telefono, this.email, this.sucursal, this.tipo)
    this.usuarioService.crear(usuario).subscribe(
      data =>{
        this.toastr.success('Usuario creado','ok',{
          timeOut : 3000,
          positionClass: 'toast-top-center'
        });
        this.router.navigate(['/usuario'])
      },
      err =>{   
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut : 3000,
          positionClass: 'toast-top-center'          
        });
        this.router.navigate(['/usuario'])     
      }
    )

  }

}
