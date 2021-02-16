import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NqlWoComponent } from './nql-wo.component';

describe('NqlWoComponent', () => {
  let component: NqlWoComponent;
  let fixture: ComponentFixture<NqlWoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NqlWoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NqlWoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
