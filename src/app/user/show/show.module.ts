import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {ShowComponent} from './show.component';
import {ShowRoutingModule} from './show-routing.module';
import {ShowService} from './show.service';
import {ShowNoSelectSeatComponent} from './noselectseat/noSelectSeat.component';
import {ShowSelectSeatComponent} from './selectseat/selectSeat.component';
import {DisPlayShowComponent} from './displayshow/disPlayShow.component';

@NgModule({
  imports: [
    CommonModule,
    ShowRoutingModule,
  ],
  declarations: [
    ShowComponent,
    DisPlayShowComponent,
    ShowNoSelectSeatComponent,
    ShowSelectSeatComponent,
  ],
  providers: [ShowService],
  bootstrap: [ShowComponent]
})
export class ShowModule {
}
