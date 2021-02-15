import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CYJuYComponent } from './cyju-y.component';

describe('CYJuYComponent', () => {
  let component: CYJuYComponent;
  let fixture: ComponentFixture<CYJuYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CYJuYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CYJuYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
