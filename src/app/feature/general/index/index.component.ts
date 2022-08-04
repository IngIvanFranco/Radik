import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Loading } from 'notiflix';
import { RegisterService } from '../servicios/register.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
public radicados:any

/*=[{
  id_radicado:String,
  tipo_documento_remitente:String,
  identificacion_remitente:String,
  ciudad_remitente:String,
  Remitente:String,
  email_remitente:String,
  direccion_remitente:String,
  Fecha:String,
  observaciones:String,
  Estado:String,
  Usr_id:String
}]*/


  public page:number = 1 ;
  constructor(
    private service:RegisterService
  ) { }

  ngOnInit(): void {
    Loading.circle()
    this.traerradicados()
   
  }

  traerradicados(){
this.service.radicados().subscribe((res:any)=>{
 
  this.radicados = res

Loading.remove()
  
})
  }



}
