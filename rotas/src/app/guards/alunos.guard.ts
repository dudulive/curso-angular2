import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { CanActivateChild } from "@angular/router/src/interfaces";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlunosGuard implements CanActivateChild{

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|boolean{
        if(state.url.includes('editar')){
            alert('Usuario Sem acesso!');
            return false;
        }
        return true;
    }
}