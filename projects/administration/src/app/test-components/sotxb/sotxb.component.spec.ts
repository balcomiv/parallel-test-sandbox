import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOTXbComponent } from './sotxb.component';

describe('SOTXbComponent', () => {
  let component: SOTXbComponent;
  let fixture: ComponentFixture<SOTXbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SOTXbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SOTXbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
