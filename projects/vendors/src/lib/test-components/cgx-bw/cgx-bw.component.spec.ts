import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgxBwComponent } from './cgx-bw.component';

describe('CgxBwComponent', () => {
  let component: CgxBwComponent;
  let fixture: ComponentFixture<CgxBwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgxBwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgxBwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
