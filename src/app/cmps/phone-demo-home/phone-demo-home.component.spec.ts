import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDemoHomeComponent } from './phone-demo-home.component';

describe('PhoneDemoHomeComponent', () => {
  let component: PhoneDemoHomeComponent;
  let fixture: ComponentFixture<PhoneDemoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneDemoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDemoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
