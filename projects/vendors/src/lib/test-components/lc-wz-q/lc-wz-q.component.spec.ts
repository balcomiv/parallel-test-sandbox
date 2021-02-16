import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcWzQComponent } from './lc-wz-q.component';

describe('LcWzQComponent', () => {
  let component: LcWzQComponent;
  let fixture: ComponentFixture<LcWzQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcWzQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LcWzQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
