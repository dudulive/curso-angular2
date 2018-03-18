import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';

@Injectable()
export class AuthGuard  implements CanActivate, CanLoad{

  constructor(private authService:AuthService, private router: Router) { }

  canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) : Observable<boolean> | boolean{
         return this.verficarAcesso();
  }

  private verficarAcesso(){
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.verficarAcesso();
  }

}
