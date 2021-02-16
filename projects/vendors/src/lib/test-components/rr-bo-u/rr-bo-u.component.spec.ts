import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrBoUComponent } from './rr-bo-u.component';

describe('RrBoUComponent', () => {
  let component: RrBoUComponent;
  let fixture: ComponentFixture<RrBoUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrBoUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RrBoUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
