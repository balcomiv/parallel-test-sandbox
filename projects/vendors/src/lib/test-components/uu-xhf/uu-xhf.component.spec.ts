import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UuXHFComponent } from './uu-xhf.component';

describe('UuXHFComponent', () => {
  let component: UuXHFComponent;
  let fixture: ComponentFixture<UuXHFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UuXHFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UuXHFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
