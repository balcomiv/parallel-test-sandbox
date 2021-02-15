import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeIvOComponent } from './oe-iv-o.component';

describe('OeIvOComponent', () => {
  let component: OeIvOComponent;
  let fixture: ComponentFixture<OeIvOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeIvOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OeIvOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
