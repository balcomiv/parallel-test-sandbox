import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSXTMComponent } from './o-sxtm.component';

describe('OSXTMComponent', () => {
  let component: OSXTMComponent;
  let fixture: ComponentFixture<OSXTMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OSXTMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OSXTMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
