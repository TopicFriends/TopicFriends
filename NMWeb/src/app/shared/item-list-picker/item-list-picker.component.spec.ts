import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListPickerComponent } from './item-list-picker.component';

describe('ItemListPickerComponent', () => {
  let component: ItemListPickerComponent;
  let fixture: ComponentFixture<ItemListPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
