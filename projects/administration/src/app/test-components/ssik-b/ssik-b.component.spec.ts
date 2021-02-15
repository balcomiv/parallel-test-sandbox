import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsikBComponent } from './ssik-b.component';

describe('SsikBComponent', () => {
  let component: SsikBComponent;
  let fixture: ComponentFixture<SsikBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsikBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsikBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
