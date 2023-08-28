import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInCustomerComponent } from './logged-in-customer.component';

describe('LoggedInCustomerComponent', () => {
  let component: LoggedInCustomerComponent;
  let fixture: ComponentFixture<LoggedInCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
