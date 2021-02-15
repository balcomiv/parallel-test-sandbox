import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EiuYOComponent } from './eiu-yo.component';

describe('EiuYOComponent', () => {
  let component: EiuYOComponent;
  let fixture: ComponentFixture<EiuYOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EiuYOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EiuYOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
