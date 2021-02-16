import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBfmZComponent } from './m-bfm-z.component';

describe('MBfmZComponent', () => {
  let component: MBfmZComponent;
  let fixture: ComponentFixture<MBfmZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MBfmZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MBfmZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
