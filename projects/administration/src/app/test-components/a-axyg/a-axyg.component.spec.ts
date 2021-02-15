import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAXYgComponent } from './a-axyg.component';

describe('AAXYgComponent', () => {
  let component: AAXYgComponent;
  let fixture: ComponentFixture<AAXYgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAXYgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAXYgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
