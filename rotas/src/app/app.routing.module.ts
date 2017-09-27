import { NgModule } from '@angular/core';

import { CursoMaoEncontradoComponent } from './cursos/curso-mao-encontrado/curso-mao-encontrado.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { ModuleWithProviders } from '@angular/core';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const AppRoute: Routes = [
    { path: 'cursos', component : CursosComponent },
    { path: 'curso/:id', component : CursoDetalheComponent },
    { path: 'login', component : LoginComponent },
    { path: 'naoEncontrado', component : CursoMaoEncontradoComponent },
    { path: '', component : HomeComponent }
]

@NgModule({
    imports:[RouterModule.forRoot(AppRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}