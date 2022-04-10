import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDemoProfComponent } from './phone-demo-prof.component';

describe('PhoneDemoProfComponent', () => {
  let component: PhoneDemoProfComponent;
  let fixture: ComponentFixture<PhoneDemoProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneDemoProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDemoProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
