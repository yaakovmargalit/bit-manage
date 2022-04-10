import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBtnsComponent } from './home-btns.component';

describe('HomeBtnsComponent', () => {
  let component: HomeBtnsComponent;
  let fixture: ComponentFixture<HomeBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
