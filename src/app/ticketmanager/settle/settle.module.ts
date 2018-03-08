import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TicketManagerSettleRoutingModule} from './settle-routing.module';
import {TicketManagerSettleComponent} from './settle.component';
import {TicketManagerSettleService} from './settle.service';


@NgModule({
  imports: [
    CommonModule,
    TicketManagerSettleRoutingModule,
  ],
  declarations: [
    TicketManagerSettleComponent,
  ],
  providers: [TicketManagerSettleService],
  bootstrap: [TicketManagerSettleComponent]
})
export class TicketManagerSettleModule {
}
