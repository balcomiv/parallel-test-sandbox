import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrxLMComponent } from './hrx-lm.component';

describe('HrxLMComponent', () => {
  let component: HrxLMComponent;
  let fixture: ComponentFixture<HrxLMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrxLMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrxLMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
