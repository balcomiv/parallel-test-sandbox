import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeKGgComponent } from './oe-kgg.component';

describe('OeKGgComponent', () => {
  let component: OeKGgComponent;
  let fixture: ComponentFixture<OeKGgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeKGgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OeKGgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
