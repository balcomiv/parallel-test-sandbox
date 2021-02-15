import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GvKQCComponent } from './gv-kqc.component';

describe('GvKQCComponent', () => {
  let component: GvKQCComponent;
  let fixture: ComponentFixture<GvKQCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GvKQCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GvKQCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
