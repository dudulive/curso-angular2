/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CursoMaoEncontradoComponent } from './curso-mao-encontrado.component';

describe('CursoMaoEncontradoComponent', () => {
  let component: CursoMaoEncontradoComponent;
  let fixture: ComponentFixture<CursoMaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoMaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoMaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
