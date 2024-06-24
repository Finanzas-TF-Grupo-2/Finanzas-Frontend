import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import {ClienteComponent} from './components/cliente/add-cliente/cliente.component';
import { ListClienteComponent } from './components/cliente/list-cliente/list-cliente.component';
import { AddCompraComponent } from './components/compra/add-compra/add-compra.component';
import { PagarCompraComponent } from './components/compra/pagar-compra/pagar-compra.component';
import { HomeComponent } from './components/header/home/home.component';
import { ClienteResumenComponent } from './components/cliente/cliente-resumen/cliente-resumen.component';
import { AddProductoComponent } from './components/producto/add-producto/add-producto.component';
import { ListProductoComponent } from './components/producto/list-producto/list-producto.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {path: 'home', component: HomeComponent},
    { path: 'add-cliente', component: ClienteComponent },
    { path: 'clientes', component: ListClienteComponent },
    { path: 'compras', component: AddCompraComponent },
    {path: 'pagar-compra/:id', component: PagarCompraComponent},
    {path: 'cliente-resumen/:id', component: ClienteResumenComponent},
    {path: 'add-producto', component: AddProductoComponent},
    {path: 'productos', component: ListProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
