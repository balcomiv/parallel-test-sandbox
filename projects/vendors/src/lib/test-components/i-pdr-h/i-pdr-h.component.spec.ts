import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPdrHComponent } from './i-pdr-h.component';

describe('IPdrHComponent', () => {
  let component: IPdrHComponent;
  let fixture: ComponentFixture<IPdrHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPdrHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IPdrHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
