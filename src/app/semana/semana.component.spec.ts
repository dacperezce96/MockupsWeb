/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SemanaComponent } from './semana.component';

describe('SemanaComponent', () => {
  let component: SemanaComponent;
  let fixture: ComponentFixture<SemanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
