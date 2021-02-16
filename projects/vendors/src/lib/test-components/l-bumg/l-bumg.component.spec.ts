import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LBUMGComponent } from './l-bumg.component';

describe('LBUMGComponent', () => {
  let component: LBUMGComponent;
  let fixture: ComponentFixture<LBUMGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LBUMGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LBUMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
