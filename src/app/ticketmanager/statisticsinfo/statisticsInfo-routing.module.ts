import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TicketManagerStatisticsInfoComponent} from './statisticsInfo.component';
import {TicketManagerUserTicketComponent} from './user/userTicket.component';
import {TicketManagerVenueTicketComponent} from './venue/venueTicket.component';
import {TicketManagerFinanceComponent} from './finance/ticketFinance.component';

const IdentifyRoutes: Routes = [{
  path: 'ticketManagerStatisticsInfo',
  component: TicketManagerStatisticsInfoComponent,
  children: [
    {
      path: '',
      component: TicketManagerStatisticsInfoComponent,
    },
    {
      path: 'userTicket',
      component: TicketManagerUserTicketComponent,
    },
    {
      path: 'venueTicket',
      component: TicketManagerVenueTicketComponent,
    },
    {
      path: 'ticketFinance',
      component: TicketManagerFinanceComponent,
    }
  ]
},
];

@NgModule({
  imports: [
    RouterModule.forChild(IdentifyRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class TicketManagerStatisticsInfoRoutingModule {
}
