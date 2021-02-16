import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VQpkNComponent } from './vqpk-n.component';

describe('VQpkNComponent', () => {
  let component: VQpkNComponent;
  let fixture: ComponentFixture<VQpkNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VQpkNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VQpkNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
