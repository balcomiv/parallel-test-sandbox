import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClypIComponent } from './clyp-i.component';

describe('ClypIComponent', () => {
  let component: ClypIComponent;
  let fixture: ComponentFixture<ClypIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClypIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClypIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
