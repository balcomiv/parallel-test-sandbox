import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSgTiComponent } from './h-sg-ti.component';

describe('HSgTiComponent', () => {
  let component: HSgTiComponent;
  let fixture: ComponentFixture<HSgTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSgTiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSgTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
