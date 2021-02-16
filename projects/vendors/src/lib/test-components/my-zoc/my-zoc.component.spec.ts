import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyZocComponent } from './my-zoc.component';

describe('MyZocComponent', () => {
  let component: MyZocComponent;
  let fixture: ComponentFixture<MyZocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyZocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyZocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
