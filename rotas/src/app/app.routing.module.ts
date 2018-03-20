import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosGuard } from './guards/alunos.guard';
import { CursosComponent } from './cursos/cursos.component';
import { NgModule } from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/guards/auth.guard';
import { CursosGuard } from 'app/guards/cursos.guard';

const AppRoute: Routes = [
    { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule',canActivate: [AuthGuard],
     canActivateChild: [CursosGuard] , canLoad: [AuthGuard]},
    { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule',canActivate: [AuthGuard] },
    { path: 'login', component : LoginComponent},
    { path: '', component : HomeComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: PaginaNaoEncontradaComponent }
]

@NgModule({
    imports:[RouterModule.forRoot(AppRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}