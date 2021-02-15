import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USLJNComponent } from './u-sljn.component';

describe('USLJNComponent', () => {
  let component: USLJNComponent;
  let fixture: ComponentFixture<USLJNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ USLJNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(USLJNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
