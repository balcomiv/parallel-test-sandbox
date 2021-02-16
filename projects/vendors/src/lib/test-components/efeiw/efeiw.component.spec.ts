import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFeiwComponent } from './efeiw.component';

describe('EFeiwComponent', () => {
  let component: EFeiwComponent;
  let fixture: ComponentFixture<EFeiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EFeiwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EFeiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
