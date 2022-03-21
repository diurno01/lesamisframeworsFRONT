import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sucursal } from '../models/sucursal';
import { Usuario } from '../models/usuario';
import { LoginService } from '../service/login.service';
import { SucursalService } from '../service/sucursal.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html'
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
  sucursales: Sucursal[]=[];
  // volver: string='';
  suchtml: string='';
  usuarioLogeado: Usuario = {} as Usuario;

  constructor(
    private loginService : LoginService,
    private sucursalService :  SucursalService,
    private usuarioService : UsuarioService,
    private toastr : ToastrService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.cargarSucursales();
    this.cargarDatos();
  }



cargarDatos(){
  this.loginService.obtenerUsuario().subscribe(
    data=>{
      this.toastr.success('Lista','ok',{
        timeOut : 1,
        positionClass: 'toast-top-center'
      });
     this.usuarioLogeado = data;
     
     if(this.usuarioLogeado.tipo == "ADMIN"){
       this.lista=["VENDEDOR","CLIENTE"];
     
     }

     if(this.usuarioLogeado.tipo == "VENDEDOR"){
      this.lista=["CLIENTE"];        
      
     }
    }
     )
}

crear(){
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

//  crear(){
//   this.loginService.obtenerUsuario().subscribe(
//     data=>{
//       this.toastr.success('','ok',{
//         timeOut : 3000,
//         positionClass: 'toast-top-center'
//       });
//      this.usuarioLogeado = data; 
      
//      if(this.usuarioLogeado.tipo == "ADMIN"){
//       const usuario = new Usuario (this.usuario, this.password, this.dni, this.nombre, this.apellido, this.direccion, this.telefono, this.email, this.sucursal, this.tipo)
//       this.usuarioService.crear(usuario).subscribe(
//         data =>{
//           this.toastr.success('Usuario creado','ok',{
//             timeOut : 3000,
//             positionClass: 'toast-top-center'
//           });
//           this.router.navigate(['/usuario'])
//         },
//         err =>{   
//           this.toastr.error(err.error.mensaje,'Fail',{
//             timeOut : 3000,
//             positionClass: 'toast-top-center'          
//           });
//           this.router.navigate(['/usuario'])     
//         }
//       )
      
//      }   

//      if(this.usuarioLogeado.tipo == "VENDEDOR"){
//       const usuario = new Usuario (this.usuario, this.password, this.dni, this.nombre, this.apellido, this.direccion, this.telefono, this.email, this.usuarioLogeado.sucursal, this.tipo)
//       this.usuarioService.crear(usuario).subscribe(
//         data =>{
//           this.toastr.success('Usuario creado','ok',{
//             timeOut : 3000,
//             positionClass: 'toast-top-center'
//           });
//           this.router.navigate(['/usuario'])
//         },
//         err =>{   
//           this.toastr.error(err.error.mensaje,'Fail',{
//             timeOut : 3000,
//             positionClass: 'toast-top-center'          
//           });
//           this.router.navigate(['/usuario'])     
//         }
//       )
     
//      }
   
//     },err=>{
//       this.toastr.error(err.error.mensaje,'Fail',{
//         timeOut : 3000,
//         positionClass: 'toast-top-center'   
//       });       
//       this.router.navigate(['/usuario']) 
//     }
//   )
// }

  cargarSucursales(): void {
    this.sucursalService.lista().subscribe(
      data=>{
        this.sucursales = data;
        console.log(this.sucursales)
      },
      err=>{
        console.log(err);
      }
    );
  }

}
