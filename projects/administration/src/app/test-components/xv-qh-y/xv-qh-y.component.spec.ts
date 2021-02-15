import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XvQhYComponent } from './xv-qh-y.component';

describe('XvQhYComponent', () => {
  let component: XvQhYComponent;
  let fixture: ComponentFixture<XvQhYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XvQhYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XvQhYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
