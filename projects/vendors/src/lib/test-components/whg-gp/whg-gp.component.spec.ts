import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhgGPComponent } from './whg-gp.component';

describe('WhgGPComponent', () => {
  let component: WhgGPComponent;
  let fixture: ComponentFixture<WhgGPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhgGPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhgGPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
