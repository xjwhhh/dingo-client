import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TicketManagerIdentifyService} from './identify.service';

import {TicketManagerIdentifyRoutingModule} from './identify-routing.module';

import {TicketManagerLoginComponent} from './login/login.component';
import {TicketManagerIdentifyComponent} from './identify.component';
import {TicketManagerInfoComponent} from './userinfo/userInfo.component';
import {TicketManagerBasicInfoComponent} from './userinfo/basicinfo/basicinfo.component';
import {TicketManagerStatisticsInfoComponent} from './userinfo/statisticsinfo/statisticsInfo.component';

@NgModule({
  imports: [
    CommonModule,
    TicketManagerIdentifyRoutingModule,
  ],
  declarations: [
    TicketManagerLoginComponent,
    TicketManagerIdentifyComponent,
    TicketManagerInfoComponent,
    TicketManagerBasicInfoComponent,
    TicketManagerStatisticsInfoComponent
  ],
  providers: [TicketManagerIdentifyService],
  bootstrap: [TicketManagerIdentifyComponent]
})
export class TicketManagerIdentifyModule {
}
