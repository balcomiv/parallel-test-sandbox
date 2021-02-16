import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVosrComponent } from './evosr.component';

describe('EVosrComponent', () => {
  let component: EVosrComponent;
  let fixture: ComponentFixture<EVosrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EVosrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EVosrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
