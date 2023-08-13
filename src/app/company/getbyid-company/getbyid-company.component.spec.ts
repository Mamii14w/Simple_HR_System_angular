import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyidCompanyComponent } from './getbyid-company.component';

describe('GetbyidCompanyComponent', () => {
  let component: GetbyidCompanyComponent;
  let fixture: ComponentFixture<GetbyidCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetbyidCompanyComponent]
    });
    fixture = TestBed.createComponent(GetbyidCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
