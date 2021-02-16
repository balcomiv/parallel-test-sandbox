import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VFSpNComponent } from './v-fsp-n.component';

describe('VFSpNComponent', () => {
  let component: VFSpNComponent;
  let fixture: ComponentFixture<VFSpNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VFSpNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VFSpNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
