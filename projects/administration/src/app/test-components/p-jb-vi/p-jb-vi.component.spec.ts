import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PJbVIComponent } from './p-jb-vi.component';

describe('PJbVIComponent', () => {
  let component: PJbVIComponent;
  let fixture: ComponentFixture<PJbVIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PJbVIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PJbVIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
