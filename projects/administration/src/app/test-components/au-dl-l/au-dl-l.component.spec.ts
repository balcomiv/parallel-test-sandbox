import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuDlLComponent } from './au-dl-l.component';

describe('AuDlLComponent', () => {
  let component: AuDlLComponent;
  let fixture: ComponentFixture<AuDlLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuDlLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuDlLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
