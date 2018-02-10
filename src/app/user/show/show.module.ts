import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {ShowComponent} from './show.component';
import {ShowRoutingModule} from './show-routing.module';
import {ShowService} from './show.service';

@NgModule({
  imports: [
    CommonModule,
    ShowRoutingModule,
  ],
  declarations: [
    ShowComponent
  ],
  providers: [ShowService],
  bootstrap: [ShowComponent]
})
export class ShowModule {
}
