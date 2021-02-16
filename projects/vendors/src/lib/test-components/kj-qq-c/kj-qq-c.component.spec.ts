import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KjQqCComponent } from './kj-qq-c.component';

describe('KjQqCComponent', () => {
  let component: KjQqCComponent;
  let fixture: ComponentFixture<KjQqCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KjQqCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KjQqCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
