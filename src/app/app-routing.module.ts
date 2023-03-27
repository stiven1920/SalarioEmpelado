import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompoenteComponent } from './module/compoente/compoente.component';
import { LoginComponent } from './module/login/login.component';
import { RegistroComponent } from './module/registro/registro.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
{
  path: "register",
  component: RegistroComponent
},
{
  path :"sueldoEmpelado",
  component: CompoenteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
