import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HBqwJComponent } from './h-bqw-j.component';

describe('HBqwJComponent', () => {
  let component: HBqwJComponent;
  let fixture: ComponentFixture<HBqwJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HBqwJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HBqwJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
