import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TqiPZComponent } from './tqi-pz.component';

describe('TqiPZComponent', () => {
  let component: TqiPZComponent;
  let fixture: ComponentFixture<TqiPZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TqiPZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TqiPZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
