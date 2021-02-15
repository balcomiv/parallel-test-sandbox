import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KzzPBComponent } from './kzz-pb.component';

describe('KzzPBComponent', () => {
  let component: KzzPBComponent;
  let fixture: ComponentFixture<KzzPBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KzzPBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KzzPBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
