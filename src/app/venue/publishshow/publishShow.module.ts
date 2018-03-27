import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublishShowRoutingModule} from './publishShow-routing.module';
import {VenuePublishShowComponent} from './publishShow.component';
import {PublishShowService} from './publishShow.service';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    PublishShowRoutingModule,
  ],
  declarations: [
    VenuePublishShowComponent
  ],
  providers: [PublishShowService],
  bootstrap: [VenuePublishShowComponent]
})
export class VenuePublishShowModule {
}
