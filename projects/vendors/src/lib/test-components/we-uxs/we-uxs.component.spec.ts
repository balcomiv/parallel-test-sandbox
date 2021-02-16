import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeUxsComponent } from './we-uxs.component';

describe('WeUxsComponent', () => {
  let component: WeUxsComponent;
  let fixture: ComponentFixture<WeUxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeUxsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeUxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
