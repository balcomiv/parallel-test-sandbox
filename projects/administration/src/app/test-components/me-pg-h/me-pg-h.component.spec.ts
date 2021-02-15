import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MePgHComponent } from './me-pg-h.component';

describe('MePgHComponent', () => {
  let component: MePgHComponent;
  let fixture: ComponentFixture<MePgHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MePgHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MePgHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
