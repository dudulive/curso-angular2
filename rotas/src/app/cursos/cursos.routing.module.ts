import { CursoMaoEncontradoComponent } from './curso-mao-encontrado/curso-mao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const CursosRoute: Routes = [
    { path: 'cursos', component : CursosComponent },
    { path: 'curso/:id', component : CursoDetalheComponent },
    { path: 'naoEncontrado', component : CursoMaoEncontradoComponent }
]

@NgModule({
    imports:[RouterModule.forChild(CursosRoute)],
    exports:[RouterModule]
})
export class CursosRoutingModule {

}