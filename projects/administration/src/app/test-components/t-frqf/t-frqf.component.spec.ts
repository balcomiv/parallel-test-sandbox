import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFRqfComponent } from './t-frqf.component';

describe('TFRqfComponent', () => {
  let component: TFRqfComponent;
  let fixture: ComponentFixture<TFRqfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TFRqfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TFRqfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
