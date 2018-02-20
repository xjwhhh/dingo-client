import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {VenueShowComponent} from './show.component';
import {VenueShowRoutingModule} from './show-routing.module';
import {VenueShowService} from './show.service';

@NgModule({
  imports: [
    CommonModule,
    VenueShowRoutingModule,
  ],
  declarations: [
    VenueShowComponent
  ],
  providers: [VenueShowService],
  bootstrap: [VenueShowComponent]
})
export class VenueShowModule {
}
