import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OEHVMComponent } from './oehvm.component';

describe('OEHVMComponent', () => {
  let component: OEHVMComponent;
  let fixture: ComponentFixture<OEHVMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OEHVMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OEHVMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
