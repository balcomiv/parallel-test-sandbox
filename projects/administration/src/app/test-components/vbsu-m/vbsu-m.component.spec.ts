import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VBsuMComponent } from './vbsu-m.component';

describe('VBsuMComponent', () => {
  let component: VBsuMComponent;
  let fixture: ComponentFixture<VBsuMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VBsuMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VBsuMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
