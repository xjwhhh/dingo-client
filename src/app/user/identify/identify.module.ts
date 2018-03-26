import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IdentifyService} from './identify.service';

import {IdentifyRoutingModule} from './identify-routing.module';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {IdentifyComponent} from './identify.component';
import {UserInfoComponent} from './userinfo/userInfo.component';
import {UserBasicInfoComponent} from './userinfo/basicinfo/basicinfo.component';
import {UserOrderInfoComponent} from './userinfo/orderinfo/orderInfo.component';
import {UserStatisticsInfoComponent} from './userinfo/statisticsinfo/statisticsInfo.component';
import {UserUpdateBasicInfoComponent} from './userinfo/updatebasicinfo/updateBasicInfo.component';
import {EmailConfirmationComponent} from './emailConfirmation/emailConfirmation.component';

@NgModule({
  imports: [
    CommonModule,
    IdentifyRoutingModule,
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    EmailConfirmationComponent,
    IdentifyComponent,
    UserInfoComponent,
    UserBasicInfoComponent,
    UserUpdateBasicInfoComponent,
    UserOrderInfoComponent,
    UserStatisticsInfoComponent
  ],
  providers: [IdentifyService],
  bootstrap: [IdentifyComponent]
})
export class IdentifyModule {
}
