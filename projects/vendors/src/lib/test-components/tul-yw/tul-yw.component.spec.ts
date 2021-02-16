import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TulYWComponent } from './tul-yw.component';

describe('TulYWComponent', () => {
  let component: TulYWComponent;
  let fixture: ComponentFixture<TulYWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TulYWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TulYWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
