import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangBtnsComponent } from './mang-btns.component';

describe('MangBtnsComponent', () => {
  let component: MangBtnsComponent;
  let fixture: ComponentFixture<MangBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
