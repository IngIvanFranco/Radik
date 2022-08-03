import { Injectable } from '@angular/core';
import { Api } from '../../../config';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  api=Api.url

  constructor(
    private servicio:HttpClient
  ) { }

ciudades(){
  return this.servicio.get(this.api+"?citys")
}

registrar(form:any){
  return this.servicio.post(this.api+'?register',form)
}

}
