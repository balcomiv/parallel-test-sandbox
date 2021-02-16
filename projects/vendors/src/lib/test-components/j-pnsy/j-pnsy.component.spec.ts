import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JPNsyComponent } from './j-pnsy.component';

describe('JPNsyComponent', () => {
  let component: JPNsyComponent;
  let fixture: ComponentFixture<JPNsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JPNsyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JPNsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
