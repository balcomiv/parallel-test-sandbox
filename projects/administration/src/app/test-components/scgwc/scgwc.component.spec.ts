import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCgwcComponent } from './scgwc.component';

describe('SCgwcComponent', () => {
  let component: SCgwcComponent;
  let fixture: ComponentFixture<SCgwcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCgwcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SCgwcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
