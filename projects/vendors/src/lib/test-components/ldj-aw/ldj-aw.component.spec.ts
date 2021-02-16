import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdjAwComponent } from './ldj-aw.component';

describe('LdjAwComponent', () => {
  let component: LdjAwComponent;
  let fixture: ComponentFixture<LdjAwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdjAwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdjAwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
