import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBFxiComponent } from './t-bfxi.component';

describe('TBFxiComponent', () => {
  let component: TBFxiComponent;
  let fixture: ComponentFixture<TBFxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBFxiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBFxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
