import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AZSXAComponent } from './a-zsxa.component';

describe('AZSXAComponent', () => {
  let component: AZSXAComponent;
  let fixture: ComponentFixture<AZSXAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZSXAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AZSXAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
