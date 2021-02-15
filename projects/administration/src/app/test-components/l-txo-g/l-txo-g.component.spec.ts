import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LTXoGComponent } from './l-txo-g.component';

describe('LTXoGComponent', () => {
  let component: LTXoGComponent;
  let fixture: ComponentFixture<LTXoGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LTXoGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LTXoGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
