import { LogService } from './../shared/log.service';

import { Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java'];

    constructor(private logService :LogService){

    }

    getCursos(){
        this.logService.consoleLog("Obtendo lista de cursos.");
        return this.cursos;
    }

    addCurso(curso: string){
        this.logService.consoleLog(`Criando um no curso ${curso}` );
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}