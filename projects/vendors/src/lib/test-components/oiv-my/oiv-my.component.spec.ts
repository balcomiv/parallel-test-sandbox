import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OivMyComponent } from './oiv-my.component';

describe('OivMyComponent', () => {
  let component: OivMyComponent;
  let fixture: ComponentFixture<OivMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OivMyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OivMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
