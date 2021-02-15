import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VericComponent } from './veric.component';

describe('VericComponent', () => {
  let component: VericComponent;
  let fixture: ComponentFixture<VericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
