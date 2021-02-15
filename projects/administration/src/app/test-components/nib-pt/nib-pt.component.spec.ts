import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NibPtComponent } from './nib-pt.component';

describe('NibPtComponent', () => {
  let component: NibPtComponent;
  let fixture: ComponentFixture<NibPtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NibPtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NibPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
