import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnbRmComponent } from './gnb-rm.component';

describe('GnbRmComponent', () => {
  let component: GnbRmComponent;
  let fixture: ComponentFixture<GnbRmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnbRmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnbRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
