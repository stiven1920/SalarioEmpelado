import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicePersonaService } from 'src/app/service/service-persona.service';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formularioPersona;

  constructor(private formBuilder: FormBuilder, private router: Router, private personaService: ServicePersonaService) {
    this.formularioPersona = this.formBuilder.group({
      nombre1: '',
      nombre2: '',
      apellido: '',
      contrasena: ''
    });
  }

  ngOnInit(): void {
  }


  onSubmit(formularioPersona: { nomber1: string; nomber2: string; apellido: string; contrasena: string; }) {
    let per: Persona = new Persona();
    per.nomber1 = formularioPersona.nomber1;
    per.nomber2 = formularioPersona.nomber2;
    per.apellido = formularioPersona.apellido;
    per.contrasena = formularioPersona.contrasena;
    this.personaService.savePersonas(per);
    this.router.navigate([""])
    console.log(formularioPersona)
  }

}
