import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdPoeComponent } from './ed-poe.component';

describe('EdPoeComponent', () => {
  let component: EdPoeComponent;
  let fixture: ComponentFixture<EdPoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdPoeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdPoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
