import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPPnVComponent } from './wppn-v.component';

describe('WPPnVComponent', () => {
  let component: WPPnVComponent;
  let fixture: ComponentFixture<WPPnVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WPPnVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WPPnVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
