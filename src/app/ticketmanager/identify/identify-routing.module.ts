import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TicketManagerLoginComponent} from './login/login.component';
import {TicketManagerIdentifyComponent} from './identify.component';
import {TicketManagerInfoComponent} from './userinfo/userInfo.component';
import {TicketManagerBasicInfoComponent} from './userinfo/basicinfo/basicinfo.component';

const IdentifyRoutes: Routes = [{
  path: 'ticketManagerIdentify',
  component: TicketManagerIdentifyComponent,
  children: [
    {
      path: '',
      component: TicketManagerLoginComponent,
    },
    {
      path: 'log',
      component: TicketManagerLoginComponent,
    },
    {
      path: 'userInfo/:id',
      component: TicketManagerInfoComponent,
      children: [
        {
          path: 'basicInfo',
          component: TicketManagerBasicInfoComponent,
        }
      ]
    }
  ]
},
];

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
