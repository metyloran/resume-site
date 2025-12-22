import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kurs } from './kurs';

describe('Kurs', () => {
  let component: Kurs;
  let fixture: ComponentFixture<Kurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kurs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kurs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
