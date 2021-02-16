import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VUcJkComponent } from './v-uc-jk.component';

describe('VUcJkComponent', () => {
  let component: VUcJkComponent;
  let fixture: ComponentFixture<VUcJkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VUcJkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VUcJkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
