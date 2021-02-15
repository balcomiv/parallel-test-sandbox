import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STBtbComponent } from './s-tbtb.component';

describe('STBtbComponent', () => {
  let component: STBtbComponent;
  let fixture: ComponentFixture<STBtbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STBtbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STBtbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
