import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {IdentifyComponent} from './identify.component';
import {UserInfoComponent} from './userinfo/userInfo.component';
import {UserBasicInfoComponent} from './userinfo/basicinfo/basicinfo.component';
import {UserOrderInfoComponent} from './userinfo/orderinfo/orderInfo.component';
import {UserStatisticsInfoComponent} from './userinfo/statisticsinfo/statisticsInfo.component';
import {UserUpdateBasicInfoComponent} from './userinfo/updatebasicinfo/updateBasicInfo.component';
import {EmailConfirmationComponent} from './emailConfirmation/emailConfirmation.component';


const IdentifyRoutes: Routes = [{
  path: 'identify',
  component: IdentifyComponent,
  children: [
    {
      path: '',
      component: LoginComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'emailConfirmation',
      component: EmailConfirmationComponent,
    },
    {
      path: 'userInfo/:id',
      component: UserInfoComponent,
      children: [
        {
          path: 'basicInfo',
          component: UserBasicInfoComponent,
        },
        {
          path: 'orderInfo',
          component: UserOrderInfoComponent,
        },
        {
          path: 'statisticsInfo',
          component: UserStatisticsInfoComponent,
        },
        {
          path: 'updateBasicInfo',
          component: UserUpdateBasicInfoComponent,
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
export class IdentifyRoutingModule {
}
