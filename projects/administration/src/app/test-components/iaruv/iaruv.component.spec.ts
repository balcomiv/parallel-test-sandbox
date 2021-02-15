import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaruvComponent } from './iaruv.component';

describe('IaruvComponent', () => {
  let component: IaruvComponent;
  let fixture: ComponentFixture<IaruvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaruvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaruvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
