import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvMJOComponent } from './hv-mjo.component';

describe('HvMJOComponent', () => {
  let component: HvMJOComponent;
  let fixture: ComponentFixture<HvMJOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HvMJOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HvMJOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
