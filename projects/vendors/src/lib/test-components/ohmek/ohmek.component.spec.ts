import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHmekComponent } from './ohmek.component';

describe('OHmekComponent', () => {
  let component: OHmekComponent;
  let fixture: ComponentFixture<OHmekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OHmekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OHmekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
