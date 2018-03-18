import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guards';
import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './aluno.routing.module';
import { AlunosComponent } from './alunos.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoDetalheResolver } from 'app/alunos/guards/aluno-detalhe.resolver';

@NgModule({ 
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    declarations:[
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers:[ AlunosService, AlunosDeactivateGuard , AlunoDetalheResolver] 
  })
  export class AlunosModule { }