import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGreetingComponent } from './customer-greeting.component';

describe('CustomerGreetingComponent', () => {
  let component: CustomerGreetingComponent;
  let fixture: ComponentFixture<CustomerGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerGreetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
