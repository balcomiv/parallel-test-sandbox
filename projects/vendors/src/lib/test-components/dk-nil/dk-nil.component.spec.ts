import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkNilComponent } from './dk-nil.component';

describe('DkNilComponent', () => {
  let component: DkNilComponent;
  let fixture: ComponentFixture<DkNilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkNilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DkNilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
