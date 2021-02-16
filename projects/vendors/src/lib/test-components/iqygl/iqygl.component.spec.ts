import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IQyglComponent } from './iqygl.component';

describe('IQyglComponent', () => {
  let component: IQyglComponent;
  let fixture: ComponentFixture<IQyglComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IQyglComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IQyglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
