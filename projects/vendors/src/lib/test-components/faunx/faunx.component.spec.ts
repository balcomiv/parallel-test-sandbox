import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAUnxComponent } from './faunx.component';

describe('FAUnxComponent', () => {
  let component: FAUnxComponent;
  let fixture: ComponentFixture<FAUnxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAUnxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAUnxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
