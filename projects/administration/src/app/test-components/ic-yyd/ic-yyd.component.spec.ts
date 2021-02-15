import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcYYdComponent } from './ic-yyd.component';

describe('IcYYdComponent', () => {
  let component: IcYYdComponent;
  let fixture: ComponentFixture<IcYYdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcYYdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcYYdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
