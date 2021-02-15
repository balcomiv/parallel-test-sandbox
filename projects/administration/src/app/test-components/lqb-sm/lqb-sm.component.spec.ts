import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LQbSmComponent } from './lqb-sm.component';

describe('LQbSmComponent', () => {
  let component: LQbSmComponent;
  let fixture: ComponentFixture<LQbSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LQbSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LQbSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
