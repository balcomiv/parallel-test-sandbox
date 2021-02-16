import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiEGComponent } from './kpi-eg.component';

describe('KpiEGComponent', () => {
  let component: KpiEGComponent;
  let fixture: ComponentFixture<KpiEGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiEGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiEGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
