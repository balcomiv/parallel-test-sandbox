import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GZeKcComponent } from './gze-kc.component';

describe('GZeKcComponent', () => {
  let component: GZeKcComponent;
  let fixture: ComponentFixture<GZeKcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GZeKcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GZeKcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
