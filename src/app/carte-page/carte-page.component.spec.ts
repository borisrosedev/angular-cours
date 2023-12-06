import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartePageComponent } from './carte-page.component';

describe('CartePageComponent', () => {
  let component: CartePageComponent;
  let fixture: ComponentFixture<CartePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartePageComponent]
    });
    fixture = TestBed.createComponent(CartePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
