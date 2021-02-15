import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVloRComponent } from './dvlo-r.component';

describe('DVloRComponent', () => {
  let component: DVloRComponent;
  let fixture: ComponentFixture<DVloRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DVloRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DVloRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
