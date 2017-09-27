import { CursosRoutingModule } from './cursos.routing.module';
import { CursosService } from './cursos.service';
import { CursoMaoEncontradoComponent } from './curso-mao-encontrado/curso-mao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({ 
    imports: [
        CommonModule,
        CursosRoutingModule
    ],
    declarations:[
        CursosComponent,
        CursosComponent,
        CursoDetalheComponent,
        CursoMaoEncontradoComponent
    ],
    providers:[CursosService]
 
  })
  export class CursosModule { }