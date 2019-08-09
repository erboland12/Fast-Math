import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionPage } from './division.page';

describe('DivisionPage', () => {
  let component: DivisionPage;
  let fixture: ComponentFixture<DivisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
