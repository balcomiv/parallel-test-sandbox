import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NJozuComponent } from './njozu.component';

describe('NJozuComponent', () => {
  let component: NJozuComponent;
  let fixture: ComponentFixture<NJozuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NJozuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NJozuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
