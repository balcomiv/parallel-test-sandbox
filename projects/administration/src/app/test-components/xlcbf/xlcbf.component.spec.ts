import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XLcbfComponent } from './xlcbf.component';

describe('XLcbfComponent', () => {
  let component: XLcbfComponent;
  let fixture: ComponentFixture<XLcbfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XLcbfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XLcbfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
