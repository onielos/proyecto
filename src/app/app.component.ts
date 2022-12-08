import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
  constructor() {}
  respuestas: number[] = [];
 
  prueba:number=1
  agregarSI(){
    this.prueba = this.respuestas.push(1);
    console.log(this.respuestas)
  }
  agregarNO(){
    this.prueba = this.respuestas.push(0);
    console.log(this.respuestas)
  }

 

  
}
