import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqIHDComponent } from './cq-ihd.component';

describe('CqIHDComponent', () => {
  let component: CqIHDComponent;
  let fixture: ComponentFixture<CqIHDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CqIHDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CqIHDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
