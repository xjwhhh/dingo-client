import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PayOrderComponent} from './payOrder.component';
import {PayOrderService} from './payOrder.service';
import {PayOrderRoutingModule} from './payOrder-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PayOrderRoutingModule
  ],
  declarations: [
    PayOrderComponent,
  ],
  providers: [PayOrderService],
  bootstrap: [PayOrderComponent]
})
export class PayOrderModule {
}
