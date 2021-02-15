import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwxXEComponent } from './uwx-xe.component';

describe('UwxXEComponent', () => {
  let component: UwxXEComponent;
  let fixture: ComponentFixture<UwxXEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UwxXEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UwxXEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
