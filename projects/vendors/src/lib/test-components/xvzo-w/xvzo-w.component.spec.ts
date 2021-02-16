import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XvzoWComponent } from './xvzo-w.component';

describe('XvzoWComponent', () => {
  let component: XvzoWComponent;
  let fixture: ComponentFixture<XvzoWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XvzoWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XvzoWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
