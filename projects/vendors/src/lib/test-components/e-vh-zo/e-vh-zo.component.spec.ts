import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVhZoComponent } from './e-vh-zo.component';

describe('EVhZoComponent', () => {
  let component: EVhZoComponent;
  let fixture: ComponentFixture<EVhZoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EVhZoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EVhZoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
