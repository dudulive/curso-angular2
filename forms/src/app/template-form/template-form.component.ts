import { CepService } from './../shared/cep.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

  onSubmit(formulario){
    console.log(formulario);

    //form.value
    //console.log(this.usuario);
    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .map(res => res)
      .subscribe(dados => {
        console.log(dados);
        formulario.form.reset();
      });
  }

  constructor(private http: Http, private cepService: CepService) { }

  ngOnInit() {
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep, form){
    this.cepService.consultaCEP(cep, this.resetaDadosForm, form)
      .subscribe(dados => this.populaDadosForm(dados, form));
  }

  populaDadosForm(dados, formulario){

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(formulario){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
