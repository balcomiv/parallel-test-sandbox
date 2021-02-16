import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEKSUComponent } from './e-eksu.component';

describe('EEKSUComponent', () => {
  let component: EEKSUComponent;
  let fixture: ComponentFixture<EEKSUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEKSUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EEKSUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
