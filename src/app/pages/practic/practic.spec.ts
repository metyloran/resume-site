import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practic } from './practic';

describe('Practic', () => {
  let component: Practic;
  let fixture: ComponentFixture<Practic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
