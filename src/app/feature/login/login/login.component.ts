import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loading, Report } from 'notiflix';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulariologin:FormGroup
  usr:any

  constructor(
    private readonly router: Router,
    public formulario:FormBuilder,
    private rutas:Router,
    private service:LoginService
  ) {
    this.formulariologin = this.formulario.group({
      email:['',[Validators.email, Validators.required]],
      password:['',[Validators.required, Validators.minLength(4)]]
    })
   }

  ngOnInit(): void {
    Loading.pulse()
    Loading.remove(1250)
  }


  login(){
    Loading.dots()
    
    this.service.login(this.formulariologin.value).subscribe(res=>{
      this.usr = res
            if (this.usr.success==0) {
        Loading.remove()
        Report.failure(
          'Su Solucion',
          'Lo lamentamos, no encontramos tus credeciales, revisa de nuevo la informacion ingresada',
          'Okay',
        )
      }else{
        Loading.remove()
        Report.success(
          'Su Solucion',
          `Bienvenido ${this.usr[0].nombres}`,
          'Okay',
        )
          let token = btoa(this.usr[0].identificacion)
          sessionStorage.setItem('token', token )
          this.rutas.navigateByUrl('/Radik/Home')

      }
     
      
      
    }, err =>{
      console.log(err.message);
      
    })
    
  }

}
