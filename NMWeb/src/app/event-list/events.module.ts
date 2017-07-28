/**
 * Created by anna on 24/06/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EventListComponent }    from './event-list.component';
import { EventListItemComponent }  from './event-list-item/event-list-item.component';
import { EventDetailsComponent }  from './event-details/event-details.component';
import { MdListModule, MdCardModule, MdButtonModule } from '@angular/material';
import { GoingButtonComponent } from './going-button/going-button.component';

const eventRoutes: Routes = [
  { path: 'event-list',  component: EventListComponent },
  { path: 'event-details/:id', component: EventDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MdListModule,
    MdCardModule,
    MdButtonModule,
    RouterModule.forChild(eventRoutes)
  ],
  declarations: [
    EventListComponent,
    EventListItemComponent,
    EventDetailsComponent,
    GoingButtonComponent
  ],
  exports: [
    RouterModule
  ]
})
export class EventsModule { }
