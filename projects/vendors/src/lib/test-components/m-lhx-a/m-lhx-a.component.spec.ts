import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLhxAComponent } from './m-lhx-a.component';

describe('MLhxAComponent', () => {
  let component: MLhxAComponent;
  let fixture: ComponentFixture<MLhxAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLhxAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLhxAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
