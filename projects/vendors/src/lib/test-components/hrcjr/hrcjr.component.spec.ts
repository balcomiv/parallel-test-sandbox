import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrcjrComponent } from './hrcjr.component';

describe('HrcjrComponent', () => {
  let component: HrcjrComponent;
  let fixture: ComponentFixture<HrcjrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrcjrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrcjrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
