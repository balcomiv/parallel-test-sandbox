import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrkrComponent } from './ngrkr.component';

describe('NgrkrComponent', () => {
  let component: NgrkrComponent;
  let fixture: ComponentFixture<NgrkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrkrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
