import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formularioLogin = this.formBuilder.group({
      usuario: '',
      contrasena: ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit(formularioLogin: { nombre1: string, contrasena: string }) {
    try {
      let persona = JSON.parse(localStorage.getItem("persona") as string);
      let per: Persona = new Persona();
      per.nombre1 = formularioLogin.nombre1;
      per.contrasena = formularioLogin.contrasena;
      if (persona.nomber1 === per.nombre1 && persona.contrasena === per.contrasena) {
        console.log("bienvenido al sistema");
        this.router.navigate(["/sueldoEmpelado"])
      } else {
        alert("credenciales invalidas");
      }
      console.log(formularioLogin);
    } catch (error) {
      console.log(error);
    }
  }

  regiter() {
    this.router.navigate(["/register"])
  }

}
