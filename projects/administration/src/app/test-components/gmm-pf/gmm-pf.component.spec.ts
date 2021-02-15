import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GMmPFComponent } from './gmm-pf.component';

describe('GMmPFComponent', () => {
  let component: GMmPFComponent;
  let fixture: ComponentFixture<GMmPFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GMmPFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GMmPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
