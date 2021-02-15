import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QJbbsComponent } from './qjbbs.component';

describe('QJbbsComponent', () => {
  let component: QJbbsComponent;
  let fixture: ComponentFixture<QJbbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QJbbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QJbbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
