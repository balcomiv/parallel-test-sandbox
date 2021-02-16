import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NJstTComponent } from './njst-t.component';

describe('NJstTComponent', () => {
  let component: NJstTComponent;
  let fixture: ComponentFixture<NJstTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NJstTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NJstTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
