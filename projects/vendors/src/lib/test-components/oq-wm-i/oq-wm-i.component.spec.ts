import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OqWmIComponent } from './oq-wm-i.component';

describe('OqWmIComponent', () => {
  let component: OqWmIComponent;
  let fixture: ComponentFixture<OqWmIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OqWmIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OqWmIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
