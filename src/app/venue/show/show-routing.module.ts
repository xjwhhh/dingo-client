import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VenueShowComponent} from './show.component';
import {VenueCheckTicketComponent} from './check/checkTicket.component';

const ShowRoutes: Routes = [{
  path: 'show',
  component: VenueShowComponent,
  children: [
    {
      path: '',
      component: VenueShowComponent,
    },
    {
      path: 'checkTicket',
      component: VenueCheckTicketComponent,
    }
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
export class VenueShowRoutingModule {
}
