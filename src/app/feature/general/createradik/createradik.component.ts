import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createradik',
  templateUrl: './createradik.component.html',
  styleUrls: ['./createradik.component.css']
})
export class CreateradikComponent implements OnInit {
archivos : any = []
  constructor() { }

  ngOnInit(): void {
  }

  addarchivo(){
    this.archivos.push({nombre:"add"})
  }

}
