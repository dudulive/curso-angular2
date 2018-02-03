import { CursosComponent } from './cursos/cursos.component';
import { NgModule } from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/guards/auth.guard';

const AppRoute: Routes = [
    { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule',canActivate: [AuthGuard]},
    { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule',canActivate: [AuthGuard] },
    { path: 'login', component : LoginComponent},
    { path: '', component : HomeComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports:[RouterModule.forRoot(AppRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}