import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoHQoComponent } from './jo-hqo.component';

describe('JoHQoComponent', () => {
  let component: JoHQoComponent;
  let fixture: ComponentFixture<JoHQoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoHQoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoHQoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
