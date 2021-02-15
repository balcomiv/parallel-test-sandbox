import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZFqDiComponent } from './z-fq-di.component';

describe('ZFqDiComponent', () => {
  let component: ZFqDiComponent;
  let fixture: ComponentFixture<ZFqDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZFqDiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZFqDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
