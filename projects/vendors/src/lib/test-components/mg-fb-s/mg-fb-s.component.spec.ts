import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgFbSComponent } from './mg-fb-s.component';

describe('MgFbSComponent', () => {
  let component: MgFbSComponent;
  let fixture: ComponentFixture<MgFbSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgFbSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgFbSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
