import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UTOOrComponent } from './u-toor.component';

describe('UTOOrComponent', () => {
  let component: UTOOrComponent;
  let fixture: ComponentFixture<UTOOrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UTOOrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UTOOrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
