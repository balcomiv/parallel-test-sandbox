import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JktMWComponent } from './jkt-mw.component';

describe('JktMWComponent', () => {
  let component: JktMWComponent;
  let fixture: ComponentFixture<JktMWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JktMWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JktMWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
