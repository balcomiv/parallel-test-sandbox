import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GWLEkComponent } from './g-wlek.component';

describe('GWLEkComponent', () => {
  let component: GWLEkComponent;
  let fixture: ComponentFixture<GWLEkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GWLEkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GWLEkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
