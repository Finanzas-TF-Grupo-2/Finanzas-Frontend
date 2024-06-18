import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/auth/login/login.component';
import { ClienteComponent } from './components/cliente/add-cliente/cliente.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ListClienteComponent } from './components/cliente/list-cliente/list-cliente.component';
import { AddCompraComponent } from './components/compra/add-compra/add-compra.component';
import { PagoDialogComponent } from './components/pago/pago-dialog/pago-dialog.component';
import { PagarCompraComponent } from './components/compra/pagar-compra/pagar-compra.component';
import { NabvarComponent } from './components/header/nabvar/nabvar.component';
import { HomeComponent } from './components/header/home/home.component';
import { ClienteResumenComponent } from './components/cliente/cliente-resumen/cliente-resumen.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    ListClienteComponent,
    AddCompraComponent,
    PagoDialogComponent,
    PagarCompraComponent,
    NabvarComponent,
    HomeComponent,
    ClienteResumenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
