import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaHotelComponent } from './hotel/lista-hotel.component';
import { DetalleHotelComponent } from './hotel/detalle-hotel.component';
import { NuevoHotelComponent } from './hotel/nuevo-hotel.component';
import { EditarHotelComponent } from './hotel/editar-hotel.component';

const routes: Routes = [
  {path: '', component: ListaHotelComponent},
  {path: 'detalle/:id', component:DetalleHotelComponent},
  {path: 'nuevo',component:NuevoHotelComponent},
  {path: 'editar/:id', component:EditarHotelComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
