import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

  onSubmit(formularioLogin: any) {
    console.log(formularioLogin)
  }

  regiter() {
    this.router.navigate(["/register"])
    console.log("mateo es perra")
  }

}
