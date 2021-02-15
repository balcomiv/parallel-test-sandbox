import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UKgSQComponent } from './u-kg-sq.component';

describe('UKgSQComponent', () => {
  let component: UKgSQComponent;
  let fixture: ComponentFixture<UKgSQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UKgSQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UKgSQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
