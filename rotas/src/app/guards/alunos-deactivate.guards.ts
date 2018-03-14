import { CanActivate, CanDeactivate } from '@angular/router/src/interfaces';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';
import { AlunoFormComponent } from 'app/alunos/aluno-form/aluno-form.component';
import { truncate } from 'fs';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {

  canDeactivate(
        component: AlunoFormComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        return component.podeMudarRota();
    }
}