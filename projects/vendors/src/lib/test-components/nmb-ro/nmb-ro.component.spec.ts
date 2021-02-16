import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmbROComponent } from './nmb-ro.component';

describe('NmbROComponent', () => {
  let component: NmbROComponent;
  let fixture: ComponentFixture<NmbROComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NmbROComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NmbROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
