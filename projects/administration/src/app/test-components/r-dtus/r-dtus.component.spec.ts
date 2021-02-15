import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDTUsComponent } from './r-dtus.component';

describe('RDTUsComponent', () => {
  let component: RDTUsComponent;
  let fixture: ComponentFixture<RDTUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RDTUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RDTUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
