import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoonyComponent } from './joony.component';

describe('JoonyComponent', () => {
  let component: JoonyComponent;
  let fixture: ComponentFixture<JoonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
