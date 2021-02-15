import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KHAnmComponent } from './k-hanm.component';

describe('KHAnmComponent', () => {
  let component: KHAnmComponent;
  let fixture: ComponentFixture<KHAnmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KHAnmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KHAnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
