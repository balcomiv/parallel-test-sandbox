import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GzylxComponent } from './gzylx.component';

describe('GzylxComponent', () => {
  let component: GzylxComponent;
  let fixture: ComponentFixture<GzylxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GzylxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GzylxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
