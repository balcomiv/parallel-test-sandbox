import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TYsmXComponent } from './tysm-x.component';

describe('TYsmXComponent', () => {
  let component: TYsmXComponent;
  let fixture: ComponentFixture<TYsmXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TYsmXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TYsmXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
