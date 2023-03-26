import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compoente',
  templateUrl: './compoente.component.html',
  styleUrls: ['./compoente.component.css']
})
export class CompoenteComponent implements OnInit {

  fromularioComponente;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.fromularioComponente = this.formBuilder.group({
      nombre: '',
      apellido: '',
      categoria: '',
      sueldo: 0,
      horasExtras: 0,
    });
  }

  ngOnInit(): void {
  }

  onSubmit(fromularioComponente: any) {

  }


  calcularSueldo(categoria: number, sueldo: number, horasExtras: number) {
    let elExtra;
    if (categoria >= 1) {// tiene la obligacion de poner 1 como categoria o si no lo manda al else
      if (categoria <= 5) { // tiene la obligacion de poner 5 como categoria o si no lo manda al else
        if (categoria === 1 && horasExtras > 40) {// pone el tipo de categoria y las horas extras mayor a 40
          elExtra = 1800;
          sueldo = (sueldo * 0.25) + sueldo; // calcula la multiplicacion y se lo suma al sueldo
        } else if (categoria === 2 && horasExtras > 40) {
          elExtra = 12000;
          sueldo = (elExtra * 0.25) + sueldo;
        } else if (categoria === 3 && horasExtras > 40) {
          elExtra = 18000;
          sueldo = (elExtra * 0.25) + sueldo;
        } else if (categoria === 2 && horasExtras > 40) {
          elExtra = 25000;
          sueldo = (elExtra * 0.25) + sueldo;
        } else if (categoria === 2 && horasExtras > 40) {
          elExtra = 32000;
          sueldo = (elExtra * 0.25) + sueldo;
        } else {
          sueldo = sueldo + (sueldo)
        }
      } else {
        console.log('no hay categorias mayores a 5');
      }
    } else {
      console.log('no hay categorias menores a 1');
    }

  }
}
