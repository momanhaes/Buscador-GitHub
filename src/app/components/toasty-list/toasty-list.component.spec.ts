/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToastyListComponent } from './toasty-list.component';

describe('ToastyListComponent', () => {
  let component: ToastyListComponent;
  let fixture: ComponentFixture<ToastyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
