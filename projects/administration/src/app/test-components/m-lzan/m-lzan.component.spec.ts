import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLZAnComponent } from './m-lzan.component';

describe('MLZAnComponent', () => {
  let component: MLZAnComponent;
  let fixture: ComponentFixture<MLZAnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLZAnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLZAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
