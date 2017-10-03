import { CursosComponent } from './cursos/cursos.component';
import { NgModule } from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const AppRoute: Routes = [
    { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule' },
    { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule' },
    { path: 'login', component : LoginComponent },
    { path: '', component : HomeComponent }
]

@NgModule({
    imports:[RouterModule.forRoot(AppRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}