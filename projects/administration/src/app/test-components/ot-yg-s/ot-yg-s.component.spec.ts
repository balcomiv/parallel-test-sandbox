import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtYgSComponent } from './ot-yg-s.component';

describe('OtYgSComponent', () => {
  let component: OtYgSComponent;
  let fixture: ComponentFixture<OtYgSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtYgSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtYgSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
