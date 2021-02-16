import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDfqvComponent } from './tdfqv.component';

describe('TDfqvComponent', () => {
  let component: TDfqvComponent;
  let fixture: ComponentFixture<TDfqvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDfqvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TDfqvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
