import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdgLGComponent } from './adg-lg.component';

describe('AdgLGComponent', () => {
  let component: AdgLGComponent;
  let fixture: ComponentFixture<AdgLGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdgLGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdgLGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
