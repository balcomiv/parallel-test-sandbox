import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VYELUComponent } from './vyelu.component';

describe('VYELUComponent', () => {
  let component: VYELUComponent;
  let fixture: ComponentFixture<VYELUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VYELUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VYELUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
