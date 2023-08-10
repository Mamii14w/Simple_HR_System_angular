import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEmpComponent } from './header-emp.component';

describe('HeaderEmpComponent', () => {
  let component: HeaderEmpComponent;
  let fixture: ComponentFixture<HeaderEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderEmpComponent]
    });
    fixture = TestBed.createComponent(HeaderEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
