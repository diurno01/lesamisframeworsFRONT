import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../models/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html'
})
export class ListaUsuarioComponent implements OnInit {

  aux: string = {} as string;
  usuarioLogeado: Usuario= {} as Usuario;
  usuarios: Usuario[]=[];
  botonEliminar: string={} as string;



  constructor(
    private usuarioService: UsuarioService, 
    private loginService : LoginService,
    private router : Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

      this.cargarUsuarios();
       
  }

  volver(): void {
    this.loginService.obtenerUsuario().subscribe(
      data=>{
        this.toastr.success('','ok',{
          timeOut : 3000,
          positionClass: 'toast-top-center'
        });
       this.usuarioLogeado = data; 
        
       if(this.usuarioLogeado.tipo == "ADMIN"){
        this.router.navigate(['/menu-admin']) 
       }else{
        this.router.navigate(['/menu-vendedor'])
       }    
      },err=>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut : 3000,
          positionClass: 'toast-top-center'   
        });       
        this.router.navigate(['/login']) 
      }
    )
  }

  cargarUsuarios(): void{
    this.loginService.obtenerUsuario().subscribe(
        data=>{
          this.toastr.success('Lista','ok',{
            timeOut : 3000,
            positionClass: 'toast-top-center'
          });
          this.usuarioLogeado = data; 
          // console.log(this.usuarioLogeado.tipo)

          if(this.usuarioLogeado.tipo == "ADMIN"){
            this.usuarioService.lista().subscribe(
              data=>{
                this.usuarios = data;       
                // console.log(this.usuarios)
              },
              err=>{
                console.log(err);
                console.log("error fallo lista")
              }      
            );
          }   

          if(this.usuarioLogeado.tipo == "VENDEDOR"){
            this.usuarioService.listaClientes().subscribe(
              data=>{
                this.usuarios = data;       
                // console.log(this.usuarios)
              },
              err=>{
                console.log(err);
                console.log("error fallo lista")
              }      
            );
      }
    }
    )
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
