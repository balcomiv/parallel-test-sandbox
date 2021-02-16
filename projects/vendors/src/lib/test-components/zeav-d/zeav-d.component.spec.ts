import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeavDComponent } from './zeav-d.component';

describe('ZeavDComponent', () => {
  let component: ZeavDComponent;
  let fixture: ComponentFixture<ZeavDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeavDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeavDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
