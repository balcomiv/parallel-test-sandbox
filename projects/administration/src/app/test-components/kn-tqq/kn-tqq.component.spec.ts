import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnTqqComponent } from './kn-tqq.component';

describe('KnTqqComponent', () => {
  let component: KnTqqComponent;
  let fixture: ComponentFixture<KnTqqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnTqqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnTqqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
