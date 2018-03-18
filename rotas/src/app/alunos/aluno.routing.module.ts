import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';

import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AlunosDeactivateGuard } from 'app/guards/alunos-deactivate.guards';

const alunosRoute: Routes = [
    {path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent,
                resolve: { aluno : AlunoDetalheResolver }},
        {path: ':id/editar', component: AlunoFormComponent,
                canDeactivate : [AlunosDeactivateGuard] }
    ]},
    
]

@NgModule({
    imports:[RouterModule.forChild(alunosRoute)],
    exports:[RouterModule]
})
export class AlunosRoutingModule {

}