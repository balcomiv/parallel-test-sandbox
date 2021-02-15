import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ILkFwComponent } from './ilk-fw.component';

describe('ILkFwComponent', () => {
  let component: ILkFwComponent;
  let fixture: ComponentFixture<ILkFwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ILkFwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ILkFwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
