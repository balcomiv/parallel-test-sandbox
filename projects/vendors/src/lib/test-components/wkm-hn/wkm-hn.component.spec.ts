import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WKmHNComponent } from './wkm-hn.component';

describe('WKmHNComponent', () => {
  let component: WKmHNComponent;
  let fixture: ComponentFixture<WKmHNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WKmHNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WKmHNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
