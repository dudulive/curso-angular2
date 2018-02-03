import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  fazerLogin(usuario:Usuario){
    if(usuario.nome === 'teste' && usuario.senha === 'teste'){
        this.usuarioAutenticado = true;
        this.mostarMenuEmitter.emit(true);
        this.router.navigate(['/']);
    }else {
        this.mostarMenuEmitter.emit(false);
    }
}

}
