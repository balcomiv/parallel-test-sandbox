import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PZHBkComponent } from './pzhbk.component';

describe('PZHBkComponent', () => {
  let component: PZHBkComponent;
  let fixture: ComponentFixture<PZHBkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PZHBkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PZHBkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
