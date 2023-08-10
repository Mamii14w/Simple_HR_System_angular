import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyIdComponent } from './searchby-id.component';

describe('SearchbyIdComponent', () => {
  let component: SearchbyIdComponent;
  let fixture: ComponentFixture<SearchbyIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchbyIdComponent]
    });
    fixture = TestBed.createComponent(SearchbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
