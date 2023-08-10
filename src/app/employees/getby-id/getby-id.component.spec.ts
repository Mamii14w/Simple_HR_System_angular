import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyIdComponent } from './getby-id.component';

describe('GetbyIdComponent', () => {
  let component: GetbyIdComponent;
  let fixture: ComponentFixture<GetbyIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetbyIdComponent]
    });
    fixture = TestBed.createComponent(GetbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
