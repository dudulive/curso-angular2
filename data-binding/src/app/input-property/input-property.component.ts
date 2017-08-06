import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
 // inputs: ['nome']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nome: string = '';

  constructor() { }

  ngOnInit() {
  }

}
