import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZGTOgComponent } from './z-gtog.component';

describe('ZGTOgComponent', () => {
  let component: ZGTOgComponent;
  let fixture: ComponentFixture<ZGTOgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZGTOgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZGTOgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
