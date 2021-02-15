import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhgezComponent } from './ahgez.component';

describe('AhgezComponent', () => {
  let component: AhgezComponent;
  let fixture: ComponentFixture<AhgezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhgezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhgezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
