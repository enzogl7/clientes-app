import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [
  { path: 'servico', component: LayoutComponent, children: [
    { path: 'novo', component: ServicoPrestadoFormComponent},
    { path: 'listar', component: ServicoPrestadoListaComponent },
    { path: '', redirectTo: 'listar', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
