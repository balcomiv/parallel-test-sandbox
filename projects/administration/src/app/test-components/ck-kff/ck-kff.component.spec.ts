import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkKFFComponent } from './ck-kff.component';

describe('CkKFFComponent', () => {
  let component: CkKFFComponent;
  let fixture: ComponentFixture<CkKFFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CkKFFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CkKFFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
