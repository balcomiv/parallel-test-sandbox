import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XUnLtComponent } from './xun-lt.component';

describe('XUnLtComponent', () => {
  let component: XUnLtComponent;
  let fixture: ComponentFixture<XUnLtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XUnLtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XUnLtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
