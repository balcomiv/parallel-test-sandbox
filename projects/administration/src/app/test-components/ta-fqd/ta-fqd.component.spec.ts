import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaFQdComponent } from './ta-fqd.component';

describe('TaFQdComponent', () => {
  let component: TaFQdComponent;
  let fixture: ComponentFixture<TaFQdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaFQdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaFQdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
