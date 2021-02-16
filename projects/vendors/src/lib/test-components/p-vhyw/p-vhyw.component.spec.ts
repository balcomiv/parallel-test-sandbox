import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PVHywComponent } from './p-vhyw.component';

describe('PVHywComponent', () => {
  let component: PVHywComponent;
  let fixture: ComponentFixture<PVHywComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PVHywComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PVHywComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
