import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../servicios/register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, async } from 'rxjs';

@Component({
  selector: 'app-createradik',
  templateUrl: './createradik.component.html',
  styleUrls: ['./createradik.component.css']
})
export class CreateradikComponent implements OnInit {
archivos : any = []
citys:any =[]

formularioradicado: FormGroup
  constructor(
    private registerservice: RegisterService,
    private formulario: FormBuilder,
    private rutas: Router,
  ) {
    this.formularioradicado = this.formulario.group(
      {
        tipoide:['Seleccione el tipo de documento',[Validators.required,Validators.maxLength(2)]],
        identificacion:['',[Validators.required,Validators.maxLength(10)]],
        remitente:['',Validators.required],
        tel:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        direccion:['',Validators.required],
        ciudad:['Selecciona la Ciudad',Validators.required],
        observaciones:['',[Validators.required,Validators.minLength(10)]],

      }
    )
   }

  ngOnInit(): void {
    this.registerservice.ciudades().subscribe(res=>{
    this.citys = res
      
    })
  }

  addarchivo(){
    this.archivos.push({nombre:"add"})
  }

  crearRegistro(){
console.log(this.formularioradicado.value);

    /*

    this.registerservice.registrar(this.formularioradicado.value).subscribe(res=>{

    })*/
  }

}
