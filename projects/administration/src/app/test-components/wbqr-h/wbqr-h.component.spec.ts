import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbqrHComponent } from './wbqr-h.component';

describe('WbqrHComponent', () => {
  let component: WbqrHComponent;
  let fixture: ComponentFixture<WbqrHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbqrHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WbqrHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
