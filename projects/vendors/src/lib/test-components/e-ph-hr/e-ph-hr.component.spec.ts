import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPhHRComponent } from './e-ph-hr.component';

describe('EPhHRComponent', () => {
  let component: EPhHRComponent;
  let fixture: ComponentFixture<EPhHRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPhHRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EPhHRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
