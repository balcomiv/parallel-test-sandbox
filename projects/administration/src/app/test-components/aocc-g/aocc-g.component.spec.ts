import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoccGComponent } from './aocc-g.component';

describe('AoccGComponent', () => {
  let component: AoccGComponent;
  let fixture: ComponentFixture<AoccGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoccGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AoccGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
