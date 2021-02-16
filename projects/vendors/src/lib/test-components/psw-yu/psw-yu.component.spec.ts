import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PswYuComponent } from './psw-yu.component';

describe('PswYuComponent', () => {
  let component: PswYuComponent;
  let fixture: ComponentFixture<PswYuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PswYuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PswYuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
