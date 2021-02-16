import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VxAzYComponent } from './vx-az-y.component';

describe('VxAzYComponent', () => {
  let component: VxAzYComponent;
  let fixture: ComponentFixture<VxAzYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VxAzYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VxAzYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
