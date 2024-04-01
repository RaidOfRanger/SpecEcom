import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecHomeComponent } from './spec-home.component';

describe('SpecHomeComponent', () => {
  let component: SpecHomeComponent;
  let fixture: ComponentFixture<SpecHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
