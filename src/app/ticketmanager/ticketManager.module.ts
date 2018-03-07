import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TicketManagerExamineModule} from './examine/examine.module';
import {TicketManagerComponent} from './ticketManager.component';
import {TicketManagerRoutingModule} from './ticketManager-routing.module';
import {TicketManagerIdentifyModule} from './identify/identify.module';


@NgModule({
  imports: [
    CommonModule,
    TicketManagerRoutingModule,
    TicketManagerIdentifyModule,
    TicketManagerExamineModule,
  ],
  declarations: [
    TicketManagerComponent,
  ],
  providers: [],
  bootstrap: [TicketManagerComponent]
})
export class TicketManagerModule {
}
