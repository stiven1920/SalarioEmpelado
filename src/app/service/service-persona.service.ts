import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonaService {

  listPersonas: Persona[] =[]

  constructor() {
    this.listPersonas = JSON.parse(localStorage.getItem("persona"));
  }

  savePersonas(persona :Persona){
    this.listPersonas.push(persona);
    localStorage.setItem("persona", JSON.stringify(this.listPersonas));
  }
}
