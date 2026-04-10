import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArregloSimple } from './arreglo-simple';

describe('ArregloSimple', () => {
  let component: ArregloSimple;
  let fixture: ComponentFixture<ArregloSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArregloSimple],
    }).compileComponents();

    fixture = TestBed.createComponent(ArregloSimple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
