import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDmyDComponent } from './v-dmy-d.component';

describe('VDmyDComponent', () => {
  let component: VDmyDComponent;
  let fixture: ComponentFixture<VDmyDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VDmyDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VDmyDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
