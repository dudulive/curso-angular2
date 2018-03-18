import { AlunosService } from './../alunos.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router/src/interfaces";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Aluno } from 'app/alunos/aluno';
  
  @Injectable()
  export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private alunosService: AlunosService) {}
  
    resolve(
         route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        return this.alunosService.getAluno(route.params['id']);
    }
  }