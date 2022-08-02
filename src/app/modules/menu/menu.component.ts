import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  creditos = [
    {nombre:"Home",link:"Home", icon:"bi bi-house-fill"},
    {nombre:"Generar Radicado",link:"Create-New" ,icon:"bi bi-file-plus-fill"},
    {nombre:"dos",link:"2"  ,icon:"bi bi-arrow-bar-right"},
    {nombre:"tres",link:"3" ,icon:"bi bi-arrow-bar-right"},
  ]
    constructor(
      private rutas:Router
    ) { }
  
    ngOnInit(): void {
    }
  
    click(id:any){
  
    }

    unlogin(){
      sessionStorage.removeItem('token')
this.rutas.navigateByUrl('/login')
    }

}
