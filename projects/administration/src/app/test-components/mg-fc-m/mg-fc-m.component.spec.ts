import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgFcMComponent } from './mg-fc-m.component';

describe('MgFcMComponent', () => {
  let component: MgFcMComponent;
  let fixture: ComponentFixture<MgFcMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgFcMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgFcMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
