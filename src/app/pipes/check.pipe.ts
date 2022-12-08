import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  transform(datos: Array<number>): any {
    
    let cont:number=0;
    for(const post of datos){
      cont = cont + post;
    };
    if(cont > 8){
      return 'Tiene Covid: Gravedad: GRAVE'
    }
    if(cont > 5){
      return 'Tiene Covid: Gravedad: MEDIO'
    }
    if(cont > 3){
      return 'Tiene Covid: Gravedad: BAJA'
    }
    if(cont > 1){
      return 'Debe visitar un médico'
    }
    if(cont === 0){
      return 'Sin Covid'
    }
    
  }

}
