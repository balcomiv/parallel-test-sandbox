import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIfTRComponent } from './fif-tr.component';

describe('FIfTRComponent', () => {
  let component: FIfTRComponent;
  let fixture: ComponentFixture<FIfTRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIfTRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FIfTRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
