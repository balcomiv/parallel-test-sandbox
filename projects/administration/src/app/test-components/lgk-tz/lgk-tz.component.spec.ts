import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LGkTzComponent } from './lgk-tz.component';

describe('LGkTzComponent', () => {
  let component: LGkTzComponent;
  let fixture: ComponentFixture<LGkTzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LGkTzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LGkTzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
