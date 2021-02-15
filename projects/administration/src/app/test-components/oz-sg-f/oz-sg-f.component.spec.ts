import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzSgFComponent } from './oz-sg-f.component';

describe('OzSgFComponent', () => {
  let component: OzSgFComponent;
  let fixture: ComponentFixture<OzSgFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OzSgFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OzSgFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
