import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAUJBComponent } from './m-aujb.component';

describe('MAUJBComponent', () => {
  let component: MAUJBComponent;
  let fixture: ComponentFixture<MAUJBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAUJBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MAUJBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
