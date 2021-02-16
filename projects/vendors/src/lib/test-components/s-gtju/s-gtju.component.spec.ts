import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SGTjuComponent } from './s-gtju.component';

describe('SGTjuComponent', () => {
  let component: SGTjuComponent;
  let fixture: ComponentFixture<SGTjuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SGTjuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SGTjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
