import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutacionSimple } from './permutacion-simple';

describe('PermutacionSimple', () => {
  let component: PermutacionSimple;
  let fixture: ComponentFixture<PermutacionSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermutacionSimple],
    }).compileComponents();

    fixture = TestBed.createComponent(PermutacionSimple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
