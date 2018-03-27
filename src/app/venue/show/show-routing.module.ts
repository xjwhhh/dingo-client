import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VenueShowComponent} from './show.component';
import {VenueCheckTicketComponent} from './check/checkTicket.component';
import {VenueDisPlayShowComponent} from './displayShow/disPlayShow.component';
import {VenueBuyTicketComponent} from './buyticket/buyTicket.component';

const ShowRoutes: Routes = [{
  path: 'venueShow/:venueId',
  component: VenueShowComponent,
  children: [
    {
      path: '',
      component: VenueDisPlayShowComponent,
    },
    {
      path: 'checkTicket',
      component: VenueCheckTicketComponent,
    },
    {
      path: 'buyTicket',
      component: VenueBuyTicketComponent,
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
