import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VenuePublishShowComponent} from './publishShow.component';

const ShowRoutes: Routes = [{
  path: 'VenuePublishShow/:venueId',
  component: VenuePublishShowComponent,
  children: [
    {
      path: '',
      component: VenuePublishShowComponent,
    },
  ]
},
];

@NgModule({
  imports: [
    RouterModule.forChild(ShowRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class PublishShowRoutingModule {
}
