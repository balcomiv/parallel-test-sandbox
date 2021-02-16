import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmKgWComponent } from './dm-kg-w.component';

describe('DmKgWComponent', () => {
  let component: DmKgWComponent;
  let fixture: ComponentFixture<DmKgWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmKgWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmKgWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
