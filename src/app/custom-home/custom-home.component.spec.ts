import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHomeComponent } from './custom-home.component';

describe('CustomHomeComponent', () => {
  let component: CustomHomeComponent;
  let fixture: ComponentFixture<CustomHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
