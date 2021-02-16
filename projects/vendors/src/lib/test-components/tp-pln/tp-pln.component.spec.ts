import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpPlnComponent } from './tp-pln.component';

describe('TpPlnComponent', () => {
  let component: TpPlnComponent;
  let fixture: ComponentFixture<TpPlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpPlnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpPlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
