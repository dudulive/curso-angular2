import { CampoControlComponent } from './campo-control/campo-control.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownService } from './services/dropdown.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlComponent
  ], 
  exports:[
    FormDebugComponent,
    CampoControlComponent
  ],
  providers:[
    DropdownService
  ]
})
export class SharedModule { }
