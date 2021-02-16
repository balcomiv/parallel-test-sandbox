import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZZopyComponent } from './zzopy.component';

describe('ZZopyComponent', () => {
  let component: ZZopyComponent;
  let fixture: ComponentFixture<ZZopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZZopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZZopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
