import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpbtAComponent } from './cpbt-a.component';

describe('CpbtAComponent', () => {
  let component: CpbtAComponent;
  let fixture: ComponentFixture<CpbtAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpbtAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpbtAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
