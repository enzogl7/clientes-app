import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [
  { path: 'clientes', component: LayoutComponent, children: [
    { path: 'novo', component: ClientesFormComponent },
    { path: 'novo/:id', component: ClientesFormComponent },
    { path: 'lista', component: ClientesListaComponent},
    { path: '', redirectTo: 'lista', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
