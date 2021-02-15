import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VIfKAComponent } from './vif-ka.component';

describe('VIfKAComponent', () => {
  let component: VIfKAComponent;
  let fixture: ComponentFixture<VIfKAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VIfKAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VIfKAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
