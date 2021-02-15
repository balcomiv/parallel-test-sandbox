import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDIxcComponent } from './p-dixc.component';

describe('PDIxcComponent', () => {
  let component: PDIxcComponent;
  let fixture: ComponentFixture<PDIxcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDIxcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDIxcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
