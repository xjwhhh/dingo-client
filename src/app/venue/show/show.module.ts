import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {VenueShowComponent} from './show.component';
import {VenueShowRoutingModule} from './show-routing.module';
import {VenueShowService} from './show.service';
import {VenueCheckTicketComponent} from './check/checkTicket.component';
import {VenueDisPlayShowComponent} from './displayShow/disPlayShow.component';
import {VenueBuyTicketComponent} from './buyticket/buyTicket.component';

@NgModule({
  imports: [
    CommonModule,
    VenueShowRoutingModule,
  ],
  declarations: [
    VenueShowComponent,
    VenueDisPlayShowComponent,
    VenueCheckTicketComponent,
    VenueBuyTicketComponent
  ],
  providers: [VenueShowService],
  bootstrap: [VenueShowComponent]
})
export class VenueShowModule {
}
