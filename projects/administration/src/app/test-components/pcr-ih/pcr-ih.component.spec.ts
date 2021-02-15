import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCrIHComponent } from './pcr-ih.component';

describe('PCrIHComponent', () => {
  let component: PCrIHComponent;
  let fixture: ComponentFixture<PCrIHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCrIHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCrIHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
