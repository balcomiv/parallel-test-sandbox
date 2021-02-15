import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JjtTtComponent } from './jjt-tt.component';

describe('JjtTtComponent', () => {
  let component: JjtTtComponent;
  let fixture: ComponentFixture<JjtTtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JjtTtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JjtTtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
