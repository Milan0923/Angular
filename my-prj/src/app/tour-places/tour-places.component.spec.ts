import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPlacesComponent } from './tour-places.component';

describe('TourPlacesComponent', () => {
  let component: TourPlacesComponent;
  let fixture: ComponentFixture<TourPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourPlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
