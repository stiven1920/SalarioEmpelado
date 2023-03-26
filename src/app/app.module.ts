import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoenteComponent } from './module/compoente/compoente.component';
import { LoginComponent } from './module/login/login.component';
import { RegistroComponent } from './module/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    CompoenteComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
