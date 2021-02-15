import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NQhONComponent } from './n-qh-on.component';

describe('NQhONComponent', () => {
  let component: NQhONComponent;
  let fixture: ComponentFixture<NQhONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NQhONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NQhONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
