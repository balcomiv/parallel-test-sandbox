import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FWAqsComponent } from './f-waqs.component';

describe('FWAqsComponent', () => {
  let component: FWAqsComponent;
  let fixture: ComponentFixture<FWAqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FWAqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FWAqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
