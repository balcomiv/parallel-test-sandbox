import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrDuOComponent } from './pr-du-o.component';

describe('PrDuOComponent', () => {
  let component: PrDuOComponent;
  let fixture: ComponentFixture<PrDuOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrDuOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrDuOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
