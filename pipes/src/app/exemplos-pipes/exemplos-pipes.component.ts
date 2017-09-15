import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016,5,23),
    url: 'https://www.packtpub.com/application-development/learning-javascript-data-structures-and-algorithms'
  };

  livros: string[] = ['Angular 2', 'Java'];
  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos(){
    
        if (this.livros.length === 0 || this.filtro === undefined
        || this.filtro.trim() === ''){
          return this.livros;
        }
    
        return this.livros.filter(
           v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
        );
      }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assincrono'), 2000)
  }); 
  
  valorAsync2 = Observable.interval(200) 
   .map(valor => 'Valor Assincrono 2');

  constructor() { }

  ngOnInit() {
  }

}
