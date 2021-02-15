import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JupkmComponent } from './jupkm.component';

describe('JupkmComponent', () => {
  let component: JupkmComponent;
  let fixture: ComponentFixture<JupkmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JupkmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JupkmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
