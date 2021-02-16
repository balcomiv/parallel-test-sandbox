import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BOqLfComponent } from './b-oq-lf.component';

describe('BOqLfComponent', () => {
  let component: BOqLfComponent;
  let fixture: ComponentFixture<BOqLfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BOqLfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BOqLfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
