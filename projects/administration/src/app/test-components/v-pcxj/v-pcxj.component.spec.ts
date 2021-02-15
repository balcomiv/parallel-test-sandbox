import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPCXjComponent } from './v-pcxj.component';

describe('VPCXjComponent', () => {
  let component: VPCXjComponent;
  let fixture: ComponentFixture<VPCXjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VPCXjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VPCXjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
