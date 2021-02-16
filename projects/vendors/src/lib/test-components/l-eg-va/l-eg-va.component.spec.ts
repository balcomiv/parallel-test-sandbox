import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LEgVAComponent } from './l-eg-va.component';

describe('LEgVAComponent', () => {
  let component: LEgVAComponent;
  let fixture: ComponentFixture<LEgVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LEgVAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LEgVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
