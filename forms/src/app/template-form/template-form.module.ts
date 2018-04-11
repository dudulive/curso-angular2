import { CampoControlComponent } from './../campo-control/campo-control.component';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControlComponent
  ]
})
export class TemplateFormModule { }
