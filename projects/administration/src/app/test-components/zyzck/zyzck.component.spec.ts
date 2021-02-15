import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZYZCkComponent } from './zyzck.component';

describe('ZYZCkComponent', () => {
  let component: ZYZCkComponent;
  let fixture: ComponentFixture<ZYZCkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZYZCkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZYZCkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
