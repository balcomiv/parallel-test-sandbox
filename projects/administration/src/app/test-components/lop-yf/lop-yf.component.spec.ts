import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopYFComponent } from './lop-yf.component';

describe('LopYFComponent', () => {
  let component: LopYFComponent;
  let fixture: ComponentFixture<LopYFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LopYFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LopYFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
