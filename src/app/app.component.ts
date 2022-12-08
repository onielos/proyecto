import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
  public questionMode:boolean = true;
  prediccion: any;
  service: any;
  constructor() {}
  // 
  public respuestas: number[] = [];
 
  prueba:number=1
  agregarSI(){
    this.respuestas.push(1);
    this.validar();
  }
  agregarNO(){
    this.respuestas.push(0);
    this.validar();
  }
  validar(){
    if(this.respuestas.length === 9){
      this.questionMode=false;
    }
  }
  async consultar(){
    this.prediccion = await this.service.consultar(this.respuestas)
  }
 

  
}
