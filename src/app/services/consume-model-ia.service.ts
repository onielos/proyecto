import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { Rank, Tensor } from '@tensorflow/tfjs';
import {loadGraphModel} from '@tensorflow/tfjs-converter';

@Injectable({
  providedIn: 'root'
})
export class ConsumeModelIAService {
  private data:Tensor<Rank>[]|any;
  private model:Array<number>=[];
  constructor() { }

  async consultar(datos:Array<number>){
    const model = await loadGraphModel('../../assets/modeljs/model.json');
    //preprocesado de datos
    for (let i = 0; i < datos.length; i++) {
      this.data.push(tf.tensor(datos[i]));
    }
    
    return model.predict(this.data);


  }
}
