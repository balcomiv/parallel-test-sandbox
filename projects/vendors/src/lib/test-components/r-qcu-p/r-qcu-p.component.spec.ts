import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RQCuPComponent } from './r-qcu-p.component';

describe('RQCuPComponent', () => {
  let component: RQCuPComponent;
  let fixture: ComponentFixture<RQCuPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RQCuPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RQCuPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
