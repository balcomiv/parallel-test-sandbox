import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPGwaComponent } from './ipgwa.component';

describe('IPGwaComponent', () => {
  let component: IPGwaComponent;
  let fixture: ComponentFixture<IPGwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPGwaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IPGwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
