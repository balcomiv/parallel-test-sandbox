import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqdJHComponent } from './jqd-jh.component';

describe('JqdJHComponent', () => {
  let component: JqdJHComponent;
  let fixture: ComponentFixture<JqdJHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqdJHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JqdJHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
