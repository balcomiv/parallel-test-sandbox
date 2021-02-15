import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LZaPiComponent } from './l-za-pi.component';

describe('LZaPiComponent', () => {
  let component: LZaPiComponent;
  let fixture: ComponentFixture<LZaPiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LZaPiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LZaPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
