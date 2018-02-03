import { AuthService } from 'app/login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  mostarMenu: boolean = false;

  constructor(private authService: AuthService){
  }

  ngOnInit() {
    this.authService.mostarMenuEmitter.subscribe(
      mostrar => this.mostarMenu = mostrar
    );
  }
}
