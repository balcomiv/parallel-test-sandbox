import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TqNXGComponent } from './tq-nxg.component';

describe('TqNXGComponent', () => {
  let component: TqNXGComponent;
  let fixture: ComponentFixture<TqNXGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TqNXGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TqNXGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
