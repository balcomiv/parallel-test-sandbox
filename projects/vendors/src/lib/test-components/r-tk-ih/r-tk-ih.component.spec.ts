import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTkIHComponent } from './r-tk-ih.component';

describe('RTkIHComponent', () => {
  let component: RTkIHComponent;
  let fixture: ComponentFixture<RTkIHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTkIHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RTkIHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
