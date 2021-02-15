import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VOOMFComponent } from './v-oomf.component';

describe('VOOMFComponent', () => {
  let component: VOOMFComponent;
  let fixture: ComponentFixture<VOOMFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VOOMFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VOOMFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
