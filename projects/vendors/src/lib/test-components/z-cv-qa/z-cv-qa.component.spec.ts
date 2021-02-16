import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZCvQaComponent } from './z-cv-qa.component';

describe('ZCvQaComponent', () => {
  let component: ZCvQaComponent;
  let fixture: ComponentFixture<ZCvQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZCvQaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZCvQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
