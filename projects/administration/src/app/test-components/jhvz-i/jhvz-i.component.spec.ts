import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JHvzIComponent } from './jhvz-i.component';

describe('JHvzIComponent', () => {
  let component: JHvzIComponent;
  let fixture: ComponentFixture<JHvzIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JHvzIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JHvzIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
