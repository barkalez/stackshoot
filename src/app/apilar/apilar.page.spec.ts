import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApilarPage } from './apilar.page';

describe('ApilarPage', () => {
  let component: ApilarPage;
  let fixture: ComponentFixture<ApilarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApilarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
