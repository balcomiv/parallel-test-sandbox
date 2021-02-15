import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VUlByComponent } from './vul-by.component';

describe('VUlByComponent', () => {
  let component: VUlByComponent;
  let fixture: ComponentFixture<VUlByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VUlByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VUlByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
