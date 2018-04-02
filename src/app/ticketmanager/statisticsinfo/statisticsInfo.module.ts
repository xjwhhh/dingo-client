import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TicketManagerStatisticsInfoComponent} from './statisticsInfo.component';
import {TicketManagerStatisticsInfoRoutingModule} from './statisticsInfo-routing.module';
import {TicketManagerStatisticsInfoService} from './statisticsInfo.service';
import {TicketManagerUserTicketComponent} from './user/userTicket.component';
import {TicketManagerVenueTicketComponent} from './venue/venueTicket.component';
import {TicketManagerFinanceComponent} from './finance/ticketFinance.component';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    TicketManagerStatisticsInfoRoutingModule,
    NgxEchartsModule,
  ],
  declarations: [
    TicketManagerStatisticsInfoComponent,
    TicketManagerUserTicketComponent,
    TicketManagerVenueTicketComponent,
    TicketManagerFinanceComponent,
  ],
  providers: [TicketManagerStatisticsInfoService],
  bootstrap: [TicketManagerStatisticsInfoComponent]
})
export class TicketManagerStatisticsModule {
}
