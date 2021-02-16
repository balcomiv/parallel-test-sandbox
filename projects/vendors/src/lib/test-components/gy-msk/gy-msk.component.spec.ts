import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyMSkComponent } from './gy-msk.component';

describe('GyMSkComponent', () => {
  let component: GyMSkComponent;
  let fixture: ComponentFixture<GyMSkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GyMSkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GyMSkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
