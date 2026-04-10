import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinacionSimple } from './combinacion-simple';

describe('CombinacionSimple', () => {
  let component: CombinacionSimple;
  let fixture: ComponentFixture<CombinacionSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombinacionSimple],
    }).compileComponents();

    fixture = TestBed.createComponent(CombinacionSimple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
