import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KxxYXComponent } from './kxx-yx.component';

describe('KxxYXComponent', () => {
  let component: KxxYXComponent;
  let fixture: ComponentFixture<KxxYXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KxxYXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KxxYXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
