import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KXdNkComponent } from './k-xd-nk.component';

describe('KXdNkComponent', () => {
  let component: KXdNkComponent;
  let fixture: ComponentFixture<KXdNkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KXdNkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KXdNkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
