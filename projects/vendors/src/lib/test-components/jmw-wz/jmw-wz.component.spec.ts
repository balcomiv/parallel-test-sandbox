import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmwWzComponent } from './jmw-wz.component';

describe('JmwWzComponent', () => {
  let component: JmwWzComponent;
  let fixture: ComponentFixture<JmwWzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmwWzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmwWzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
