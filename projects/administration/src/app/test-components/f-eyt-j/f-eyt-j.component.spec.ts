import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEytJComponent } from './f-eyt-j.component';

describe('FEytJComponent', () => {
  let component: FEytJComponent;
  let fixture: ComponentFixture<FEytJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FEytJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FEytJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
