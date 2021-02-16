import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IxZmlComponent } from './ix-zml.component';

describe('IxZmlComponent', () => {
  let component: IxZmlComponent;
  let fixture: ComponentFixture<IxZmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IxZmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IxZmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
