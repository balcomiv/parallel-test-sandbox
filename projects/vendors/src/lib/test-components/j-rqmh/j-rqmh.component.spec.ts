import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JRQMHComponent } from './j-rqmh.component';

describe('JRQMHComponent', () => {
  let component: JRQMHComponent;
  let fixture: ComponentFixture<JRQMHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JRQMHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JRQMHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
