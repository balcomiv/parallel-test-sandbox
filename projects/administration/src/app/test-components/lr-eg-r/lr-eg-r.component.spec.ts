import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrEgRComponent } from './lr-eg-r.component';

describe('LrEgRComponent', () => {
  let component: LrEgRComponent;
  let fixture: ComponentFixture<LrEgRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrEgRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrEgRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
