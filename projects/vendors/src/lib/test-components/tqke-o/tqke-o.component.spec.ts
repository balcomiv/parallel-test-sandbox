import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TQkeOComponent } from './tqke-o.component';

describe('TQkeOComponent', () => {
  let component: TQkeOComponent;
  let fixture: ComponentFixture<TQkeOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TQkeOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TQkeOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
