import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChfeeComponent } from './chfee.component';

describe('ChfeeComponent', () => {
  let component: ChfeeComponent;
  let fixture: ComponentFixture<ChfeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChfeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
