import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkbgRComponent } from './pkbg-r.component';

describe('PkbgRComponent', () => {
  let component: PkbgRComponent;
  let fixture: ComponentFixture<PkbgRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkbgRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkbgRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
