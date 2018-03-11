import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VenueIdentifyService} from './identify.service';

import {VenueIdentifyRoutingModule} from './identify-routing.module';

import {VenueRegisterComponent} from './register/register.component';
import {VenueLoginComponent} from './login/login.component';
import {VenueIdentifyComponent} from './identify.component';
import {VenueInfoComponent} from './venueinfo/venueInfo.component';
import {VenueBasicInfoComponent} from './venueinfo/basicinfo/basicinfo.component';
import {VenueOrderInfoComponent} from './venueinfo/orderinfo/orderInfo.component';
import {VenueStatisticsInfoComponent} from './venueinfo/statisticsinfo/statisticsInfo.component';
import {VenueUpdateBasicInfoComponent} from './venueinfo/updatebasicinfo/updateBasicInfo.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VenueIdentifyRoutingModule,
  ],
  declarations: [
    VenueRegisterComponent,
    VenueLoginComponent,
    VenueIdentifyComponent,
    VenueInfoComponent,
    VenueBasicInfoComponent,
    VenueUpdateBasicInfoComponent,
    VenueOrderInfoComponent,
    VenueStatisticsInfoComponent
  ],
  providers: [VenueIdentifyService],
  bootstrap: [VenueIdentifyComponent]
})
export class VenueIdentifyModule {
}
