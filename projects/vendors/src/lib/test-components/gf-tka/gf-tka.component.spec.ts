import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GfTKAComponent } from './gf-tka.component';

describe('GfTKAComponent', () => {
  let component: GfTKAComponent;
  let fixture: ComponentFixture<GfTKAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GfTKAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GfTKAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
