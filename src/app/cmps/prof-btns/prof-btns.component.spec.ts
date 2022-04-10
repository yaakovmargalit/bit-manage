import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfBtnsComponent } from './prof-btns.component';

describe('ProfBtnsComponent', () => {
  let component: ProfBtnsComponent;
  let fixture: ComponentFixture<ProfBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
