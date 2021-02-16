import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlCByComponent } from './ol-cby.component';

describe('OlCByComponent', () => {
  let component: OlCByComponent;
  let fixture: ComponentFixture<OlCByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlCByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlCByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
