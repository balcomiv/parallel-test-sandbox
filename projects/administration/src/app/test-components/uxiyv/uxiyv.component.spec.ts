import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UXIYVComponent } from './uxiyv.component';

describe('UXIYVComponent', () => {
  let component: UXIYVComponent;
  let fixture: ComponentFixture<UXIYVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UXIYVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UXIYVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
