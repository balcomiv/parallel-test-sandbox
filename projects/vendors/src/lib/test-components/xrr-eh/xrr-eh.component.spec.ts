import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XrrEhComponent } from './xrr-eh.component';

describe('XrrEhComponent', () => {
  let component: XrrEhComponent;
  let fixture: ComponentFixture<XrrEhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XrrEhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XrrEhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
