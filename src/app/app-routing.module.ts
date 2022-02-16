import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// login routes
import { LoginComponent } from './login/login.component';
// hotel routes
import { ListaHotelComponent } from './hotel/lista-hotel.component';
import { DetalleHotelComponent } from './hotel/detalle-hotel.component';
import { NuevoHotelComponent } from './hotel/nuevo-hotel.component';
import { EditarHotelComponent } from './hotel/editar-hotel.component';
//menus
import { MenuAdminComponent } from './menus/menu-admin.component';
import { MenuVendedorComponent } from './menus/menu-vendedor.component';
import { MenuClienteComponent } from './menus/menu-cliente.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'menu-admin', component: MenuAdminComponent},
  {path: 'menu-vendedor', component: MenuVendedorComponent},
  {path: 'menu-cliente', component: MenuClienteComponent},
  {path: 'hotel', component: ListaHotelComponent},
  {path: 'hotel/detalle/:id', component:DetalleHotelComponent},
  {path: 'hotel/nuevo',component:NuevoHotelComponent},
  {path: 'hotel/editar/:id', component:EditarHotelComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
