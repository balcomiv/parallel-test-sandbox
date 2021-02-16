import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InGtNComponent } from './in-gt-n.component';

describe('InGtNComponent', () => {
  let component: InGtNComponent;
  let fixture: ComponentFixture<InGtNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InGtNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InGtNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
