import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZihTQComponent } from './zih-tq.component';

describe('ZihTQComponent', () => {
  let component: ZihTQComponent;
  let fixture: ComponentFixture<ZihTQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZihTQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZihTQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
