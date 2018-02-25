import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListInputComponent } from './item-list-input.component';

describe('ItemListInputComponent', () => {
  let component: ItemListInputComponent;
  let fixture: ComponentFixture<ItemListInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
