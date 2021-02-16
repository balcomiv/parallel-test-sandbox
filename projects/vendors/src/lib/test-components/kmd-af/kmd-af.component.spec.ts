import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KMdAFComponent } from './kmd-af.component';

describe('KMdAFComponent', () => {
  let component: KMdAFComponent;
  let fixture: ComponentFixture<KMdAFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KMdAFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KMdAFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
