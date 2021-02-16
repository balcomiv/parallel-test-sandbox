import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BEuKTComponent } from './b-eu-kt.component';

describe('BEuKTComponent', () => {
  let component: BEuKTComponent;
  let fixture: ComponentFixture<BEuKTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BEuKTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BEuKTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
