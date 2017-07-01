import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatUserWantsFormComponent } from './what-user-wants-form.component';

describe('WhatUserWantsFormComponent', () => {
  let component: WhatUserWantsFormComponent;
  let fixture: ComponentFixture<WhatUserWantsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatUserWantsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatUserWantsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
