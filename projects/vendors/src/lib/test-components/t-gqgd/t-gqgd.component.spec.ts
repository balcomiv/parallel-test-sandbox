import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TGqgdComponent } from './t-gqgd.component';

describe('TGqgdComponent', () => {
  let component: TGqgdComponent;
  let fixture: ComponentFixture<TGqgdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TGqgdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TGqgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
