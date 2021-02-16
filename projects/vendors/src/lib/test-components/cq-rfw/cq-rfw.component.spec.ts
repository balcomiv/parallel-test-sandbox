import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqRfwComponent } from './cq-rfw.component';

describe('CqRfwComponent', () => {
  let component: CqRfwComponent;
  let fixture: ComponentFixture<CqRfwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CqRfwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CqRfwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
