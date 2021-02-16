import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOBmComponent } from './ng-obm.component';

describe('NgOBmComponent', () => {
  let component: NgOBmComponent;
  let fixture: ComponentFixture<NgOBmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOBmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOBmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
