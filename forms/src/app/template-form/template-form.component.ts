import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome:'Edu',
    email: 'teste@teste.com'
  }

  onSubmit(form){

  }

  constructor() { }

  ngOnInit() {
  }

}
