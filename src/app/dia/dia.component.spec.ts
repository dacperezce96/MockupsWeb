/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiaComponent } from './dia.component';

describe('DiaComponent', () => {
  let component: DiaComponent;
  let fixture: ComponentFixture<DiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
