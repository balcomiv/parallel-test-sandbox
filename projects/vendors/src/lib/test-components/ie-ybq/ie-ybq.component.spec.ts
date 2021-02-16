import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeYbqComponent } from './ie-ybq.component';

describe('IeYbqComponent', () => {
  let component: IeYbqComponent;
  let fixture: ComponentFixture<IeYbqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IeYbqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IeYbqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
