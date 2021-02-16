import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvZvsComponent } from './ov-zvs.component';

describe('OvZvsComponent', () => {
  let component: OvZvsComponent;
  let fixture: ComponentFixture<OvZvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvZvsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvZvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
