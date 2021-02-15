import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TQtNTComponent } from './t-qt-nt.component';

describe('TQtNTComponent', () => {
  let component: TQtNTComponent;
  let fixture: ComponentFixture<TQtNTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TQtNTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TQtNTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
