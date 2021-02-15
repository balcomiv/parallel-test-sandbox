import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WTOMZComponent } from './w-tomz.component';

describe('WTOMZComponent', () => {
  let component: WTOMZComponent;
  let fixture: ComponentFixture<WTOMZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WTOMZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WTOMZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
