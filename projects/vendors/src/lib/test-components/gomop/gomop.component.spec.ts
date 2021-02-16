import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GOMopComponent } from './gomop.component';

describe('GOMopComponent', () => {
  let component: GOMopComponent;
  let fixture: ComponentFixture<GOMopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GOMopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GOMopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
