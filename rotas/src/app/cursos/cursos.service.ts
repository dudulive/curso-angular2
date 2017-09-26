import { element } from 'protractor';
import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getCursos(){
    return [
      {id: 1 , nome : 'Angular 2'},
      {id: 2 , nome : 'Java'}
    ]
  }

  getCurso(id:number){
    let cursos = this.getCursos();
    for (var index = 0; index < cursos.length; index++) {
      var element = cursos[index];
      if(element.id == id){
        return element;
      }
    }
    return null;
  }

  constructor() { }

}
