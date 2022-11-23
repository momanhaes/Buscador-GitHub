/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToastyComponent } from './toasty.component';

describe('ToastyComponent', () => {
  let component: ToastyComponent;
  let fixture: ComponentFixture<ToastyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
