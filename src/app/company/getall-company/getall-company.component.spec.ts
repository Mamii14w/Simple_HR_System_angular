import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallCompanyComponent } from './getall-company.component';

describe('GetallCompanyComponent', () => {
  let component: GetallCompanyComponent;
  let fixture: ComponentFixture<GetallCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallCompanyComponent]
    });
    fixture = TestBed.createComponent(GetallCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
