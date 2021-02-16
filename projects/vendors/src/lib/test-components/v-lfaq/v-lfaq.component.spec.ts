import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VLFAqComponent } from './v-lfaq.component';

describe('VLFAqComponent', () => {
  let component: VLFAqComponent;
  let fixture: ComponentFixture<VLFAqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VLFAqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VLFAqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
