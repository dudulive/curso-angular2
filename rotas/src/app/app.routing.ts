import { ModuleWithProviders } from '@angular/core';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTE: Routes = [
     { path: 'cursos', component : CursosComponent },
     { path: 'login', component : LoginComponent },
     { path: '', component : HomeComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);