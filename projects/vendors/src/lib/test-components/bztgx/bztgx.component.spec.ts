import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BZTGxComponent } from './bztgx.component';

describe('BZTGxComponent', () => {
  let component: BZTGxComponent;
  let fixture: ComponentFixture<BZTGxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BZTGxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BZTGxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
