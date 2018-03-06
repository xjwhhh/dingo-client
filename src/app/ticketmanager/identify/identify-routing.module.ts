import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TicketManagerLoginComponent} from './login/login.component';
import {TicketManagerIdentifyComponent} from './identify.component';
import {TicketManagerInfoComponent} from './userinfo/userInfo.component';
import {TicketManagerBasicInfoComponent} from './userinfo/basicinfo/basicinfo.component';
import {TicketManagerStatisticsInfoComponent} from './userinfo/statisticsinfo/statisticsInfo.component';


const IdentifyRoutes: Routes = [{
  path: 'TicketManagerIdentify',
  component: TicketManagerIdentifyComponent,
  children: [
    {
      path: '',
      component: TicketManagerLoginComponent,
    },
    {
      path: 'login',
      component: TicketManagerLoginComponent,
    },
    {
      path: 'userInfo',
      component: TicketManagerInfoComponent,
      children: [
        {
          path: 'basicInfo',
          component: TicketManagerBasicInfoComponent,
        },
        {
          path: 'statisticsInfo',
          component: TicketManagerStatisticsInfoComponent,
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
export class TicketManagerIdentifyRoutingModule {
}
