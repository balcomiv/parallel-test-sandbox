import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MZtArComponent } from './mzt-ar.component';

describe('MZtArComponent', () => {
  let component: MZtArComponent;
  let fixture: ComponentFixture<MZtArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MZtArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MZtArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
