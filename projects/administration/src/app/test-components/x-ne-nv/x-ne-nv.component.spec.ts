import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XNeNvComponent } from './x-ne-nv.component';

describe('XNeNvComponent', () => {
  let component: XNeNvComponent;
  let fixture: ComponentFixture<XNeNvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XNeNvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XNeNvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
