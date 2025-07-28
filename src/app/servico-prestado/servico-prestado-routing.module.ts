import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';


const routes: Routes = [
  { path: 'servico/novo', component: ServicoPrestadoFormComponent},
  { path: 'servico/listar', component: ServicoPrestadoListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
