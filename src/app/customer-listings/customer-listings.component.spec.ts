import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListingsComponent } from './customer-listings.component';

describe('CustomerListingsComponent', () => {
  let component: CustomerListingsComponent;
  let fixture: ComponentFixture<CustomerListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
