import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDSUAComponent } from './c-dsua.component';

describe('CDSUAComponent', () => {
  let component: CDSUAComponent;
  let fixture: ComponentFixture<CDSUAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDSUAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CDSUAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
