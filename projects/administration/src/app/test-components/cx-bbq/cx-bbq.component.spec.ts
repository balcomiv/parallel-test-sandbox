import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxBbqComponent } from './cx-bbq.component';

describe('CxBbqComponent', () => {
  let component: CxBbqComponent;
  let fixture: ComponentFixture<CxBbqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CxBbqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CxBbqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
