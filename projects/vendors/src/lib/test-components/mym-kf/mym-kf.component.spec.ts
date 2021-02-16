import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymKfComponent } from './mym-kf.component';

describe('MymKfComponent', () => {
  let component: MymKfComponent;
  let fixture: ComponentFixture<MymKfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymKfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MymKfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
