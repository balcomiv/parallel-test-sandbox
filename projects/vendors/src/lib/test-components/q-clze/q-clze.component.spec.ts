import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QCLzeComponent } from './q-clze.component';

describe('QCLzeComponent', () => {
  let component: QCLzeComponent;
  let fixture: ComponentFixture<QCLzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QCLzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QCLzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
