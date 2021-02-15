import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XctogComponent } from './xctog.component';

describe('XctogComponent', () => {
  let component: XctogComponent;
  let fixture: ComponentFixture<XctogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XctogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XctogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
