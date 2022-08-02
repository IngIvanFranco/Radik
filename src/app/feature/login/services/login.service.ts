import { Injectable } from '@angular/core';
import { Api } from '../../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api=Api.url
  constructor(
    private servicio:HttpClient
  ) { }


  login(datoslogin:any){
return this.servicio.post(`${this.api}?login`,datoslogin)
  }
}
