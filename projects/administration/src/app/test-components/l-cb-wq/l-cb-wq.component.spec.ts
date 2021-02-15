import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LCbWqComponent } from './l-cb-wq.component';

describe('LCbWqComponent', () => {
  let component: LCbWqComponent;
  let fixture: ComponentFixture<LCbWqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LCbWqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LCbWqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
