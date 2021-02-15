import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XvtRbComponent } from './xvt-rb.component';

describe('XvtRbComponent', () => {
  let component: XvtRbComponent;
  let fixture: ComponentFixture<XvtRbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XvtRbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XvtRbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
