import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XJXRzComponent } from './x-jxrz.component';

describe('XJXRzComponent', () => {
  let component: XJXRzComponent;
  let fixture: ComponentFixture<XJXRzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XJXRzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XJXRzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
