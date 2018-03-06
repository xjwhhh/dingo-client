import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VenueRegisterComponent} from './register/register.component';
import {VenueLoginComponent} from './login/login.component';
import {VenueIdentifyComponent} from './identify.component';
import {VenueInfoComponent} from './venueinfo/venueInfo.component';
import {VenueBasicInfoComponent} from './venueinfo/basicinfo/basicinfo.component';
import {VenueOrderInfoComponent} from './venueinfo/orderinfo/orderInfo.component';
import {VenueStatisticsInfoComponent} from './venueinfo/statisticsinfo/statisticsInfo.component';


const IdentifyRoutes: Routes = [{
  path: 'venueIdentify',
  component: VenueIdentifyComponent,
  children: [
    {
      path: '',
      component: VenueLoginComponent,
    },
    {
      path: 'login',
      component: VenueLoginComponent,
    },
    {
      path: 'register',
      component: VenueRegisterComponent,
    },
    {
      path: 'userInfo',
      component: VenueInfoComponent,
      children: [
        {
          path: 'basicInfo',
          component: VenueBasicInfoComponent,
        },
        {
          path: 'orderInfo',
          component: VenueOrderInfoComponent,
        },
        {
          path: 'statisticsInfo',
          component: VenueStatisticsInfoComponent,
        }
      ]
    }
  ]
},];

@NgModule({
  imports: [
    RouterModule.forChild(IdentifyRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class VenueIdentifyRoutingModule {
}
