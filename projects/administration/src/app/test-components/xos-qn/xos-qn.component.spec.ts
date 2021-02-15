import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XosQNComponent } from './xos-qn.component';

describe('XosQNComponent', () => {
  let component: XosQNComponent;
  let fixture: ComponentFixture<XosQNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XosQNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XosQNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
