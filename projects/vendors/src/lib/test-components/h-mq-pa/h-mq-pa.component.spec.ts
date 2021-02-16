import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HMqPAComponent } from './h-mq-pa.component';

describe('HMqPAComponent', () => {
  let component: HMqPAComponent;
  let fixture: ComponentFixture<HMqPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HMqPAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HMqPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
