import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { CanActivateChild } from "@angular/router/src/interfaces";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CursosGuard implements CanActivateChild{

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|boolean{
        return true;
    }
}