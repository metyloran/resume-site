import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDev } from './self-dev';

describe('SelfDev', () => {
  let component: SelfDev;
  let fixture: ComponentFixture<SelfDev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfDev]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfDev);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
