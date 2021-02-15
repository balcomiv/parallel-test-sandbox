import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmggrComponent } from './kmggr.component';

describe('KmggrComponent', () => {
  let component: KmggrComponent;
  let fixture: ComponentFixture<KmggrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmggrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KmggrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
