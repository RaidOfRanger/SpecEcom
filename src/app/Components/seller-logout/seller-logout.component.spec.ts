import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLogoutComponent } from './seller-logout.component';

describe('SellerLogoutComponent', () => {
  let component: SellerLogoutComponent;
  let fixture: ComponentFixture<SellerLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
