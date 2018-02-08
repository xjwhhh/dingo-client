import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IdentifyService} from './identify.service';


import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {IdentifyComponent} from './identify.component';
import {IdentifyRoutingModule} from './identify-routing.module';




@NgModule({
  imports: [
    CommonModule,
    IdentifyRoutingModule,
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    IdentifyComponent,
  ],
  providers: [IdentifyService],
  bootstrap: [IdentifyComponent]
})
export class IdentifyModule {
}
