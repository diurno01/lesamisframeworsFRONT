import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// login routes
import { LoginComponent } from './login/login.component';
// hotel routes
import { ListaHotelComponent } from './hotel/lista-hotel.component';
import { DetalleHotelComponent } from './hotel/detalle-hotel.component';
import { NuevoHotelComponent } from './hotel/nuevo-hotel.component';
import { EditarHotelComponent } from './hotel/editar-hotel.component';
//menus routes
import { MenuAdminComponent } from './menus/menu-admin.component';
import { MenuVendedorComponent } from './menus/menu-vendedor.component';
import { MenuClienteComponent } from './menus/menu-cliente.component';
//usuarios routes
import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';
//vuelos routes
import { ListaVueloComponent } from './vuelo/lista-vuelo.component';
import { DetalleVueloComponent } from './vuelo/detalle-vuelo.component';
import { NuevoVueloComponent } from './vuelo/nuevo-vuelo.component';
import { EditarVueloComponent } from './vuelo/editar-vuelo.component';
//sucursal routes
import { ListaSucursalComponent } from './sucursal/lista-sucursal.component';
import { NuevoSucursalComponent } from './sucursal/nuevo-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'usuario', component: ListaUsuarioComponent},
  {path: 'usuario/detalle/:id', component: DetalleUsuarioComponent},
  {path: 'usuario/nuevo', component: NuevoUsuarioComponent},
  {path: 'usuario/editar/:id', component: EditarUsuarioComponent},
  {path: 'menu-admin', component: MenuAdminComponent},
  {path: 'menu-vendedor', component: MenuVendedorComponent},
  {path: 'menu-cliente', component: MenuClienteComponent},
  {path: 'vuelo', component: ListaVueloComponent},
  {path: 'vuelo/detalle/:id', component: DetalleVueloComponent},
  {path: 'vuelo/nuevo', component: NuevoVueloComponent},
  {path: 'vuelo/editar/:id', component: EditarVueloComponent},
  {path: 'hotel', component: ListaHotelComponent},
  {path: 'hotel/detalle/:id', component:DetalleHotelComponent},
  {path: 'hotel/nuevo',component:NuevoHotelComponent},
  {path: 'hotel/editar/:id', component:EditarHotelComponent},
  {path: 'sucursal', component: ListaSucursalComponent},
  {path: 'sucursal/nuevo',component: NuevoSucursalComponent},
  {path: 'sucursal/editar/:id', component: EditarSucursalComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
