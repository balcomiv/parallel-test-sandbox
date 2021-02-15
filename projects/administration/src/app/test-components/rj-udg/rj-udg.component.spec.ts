import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RjUDGComponent } from './rj-udg.component';

describe('RjUDGComponent', () => {
  let component: RjUDGComponent;
  let fixture: ComponentFixture<RjUDGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RjUDGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RjUDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
