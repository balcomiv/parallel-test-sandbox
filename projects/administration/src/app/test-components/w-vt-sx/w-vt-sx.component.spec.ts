import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WVtSXComponent } from './w-vt-sx.component';

describe('WVtSXComponent', () => {
  let component: WVtSXComponent;
  let fixture: ComponentFixture<WVtSXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WVtSXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WVtSXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
