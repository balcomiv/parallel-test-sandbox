import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDXkZComponent } from './p-dxk-z.component';

describe('PDXkZComponent', () => {
  let component: PDXkZComponent;
  let fixture: ComponentFixture<PDXkZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDXkZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDXkZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
