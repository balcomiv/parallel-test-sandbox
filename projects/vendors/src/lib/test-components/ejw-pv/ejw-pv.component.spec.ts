import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjwPvComponent } from './ejw-pv.component';

describe('EjwPvComponent', () => {
  let component: EjwPvComponent;
  let fixture: ComponentFixture<EjwPvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjwPvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjwPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
