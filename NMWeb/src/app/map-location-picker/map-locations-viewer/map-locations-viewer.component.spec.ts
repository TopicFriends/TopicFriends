import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLocationsViewerComponent } from './map-locations-viewer.component';

describe('MapLocationsViewerComponent', () => {
  let component: MapLocationsViewerComponent;
  let fixture: ComponentFixture<MapLocationsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLocationsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLocationsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
