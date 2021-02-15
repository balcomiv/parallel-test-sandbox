import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XtSwvComponent } from './xt-swv.component';

describe('XtSwvComponent', () => {
  let component: XtSwvComponent;
  let fixture: ComponentFixture<XtSwvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XtSwvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XtSwvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
