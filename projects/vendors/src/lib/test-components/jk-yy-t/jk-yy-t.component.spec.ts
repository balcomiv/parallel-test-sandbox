import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JkYyTComponent } from './jk-yy-t.component';

describe('JkYyTComponent', () => {
  let component: JkYyTComponent;
  let fixture: ComponentFixture<JkYyTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JkYyTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JkYyTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
