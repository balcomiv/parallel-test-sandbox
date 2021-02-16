import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IZYTRComponent } from './izytr.component';

describe('IZYTRComponent', () => {
  let component: IZYTRComponent;
  let fixture: ComponentFixture<IZYTRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IZYTRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IZYTRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
