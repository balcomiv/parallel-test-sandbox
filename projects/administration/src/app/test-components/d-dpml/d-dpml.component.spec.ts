import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDPMlComponent } from './d-dpml.component';

describe('DDPMlComponent', () => {
  let component: DDPMlComponent;
  let fixture: ComponentFixture<DDPMlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DDPMlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DDPMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
