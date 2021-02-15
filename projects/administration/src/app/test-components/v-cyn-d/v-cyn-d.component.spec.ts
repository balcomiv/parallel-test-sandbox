import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCYnDComponent } from './v-cyn-d.component';

describe('VCYnDComponent', () => {
  let component: VCYnDComponent;
  let fixture: ComponentFixture<VCYnDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VCYnDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VCYnDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
