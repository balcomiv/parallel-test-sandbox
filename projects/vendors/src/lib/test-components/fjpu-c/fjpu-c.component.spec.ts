import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FjpuCComponent } from './fjpu-c.component';

describe('FjpuCComponent', () => {
  let component: FjpuCComponent;
  let fixture: ComponentFixture<FjpuCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FjpuCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FjpuCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
