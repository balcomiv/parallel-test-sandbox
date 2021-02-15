import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McCDjComponent } from './mc-cdj.component';

describe('McCDjComponent', () => {
  let component: McCDjComponent;
  let fixture: ComponentFixture<McCDjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McCDjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McCDjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
