import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpvEuComponent } from './cpv-eu.component';

describe('CpvEuComponent', () => {
  let component: CpvEuComponent;
  let fixture: ComponentFixture<CpvEuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpvEuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpvEuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
