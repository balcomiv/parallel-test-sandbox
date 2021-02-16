import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VBNtVComponent } from './vbnt-v.component';

describe('VBNtVComponent', () => {
  let component: VBNtVComponent;
  let fixture: ComponentFixture<VBNtVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VBNtVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VBNtVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
