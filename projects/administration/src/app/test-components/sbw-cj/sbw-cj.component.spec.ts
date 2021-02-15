import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbwCjComponent } from './sbw-cj.component';

describe('SbwCjComponent', () => {
  let component: SbwCjComponent;
  let fixture: ComponentFixture<SbwCjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbwCjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbwCjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
