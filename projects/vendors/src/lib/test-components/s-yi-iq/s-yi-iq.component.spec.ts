import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SYiIqComponent } from './s-yi-iq.component';

describe('SYiIqComponent', () => {
  let component: SYiIqComponent;
  let fixture: ComponentFixture<SYiIqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SYiIqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SYiIqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
