import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RslxnComponent } from './rslxn.component';

describe('RslxnComponent', () => {
  let component: RslxnComponent;
  let fixture: ComponentFixture<RslxnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RslxnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RslxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
