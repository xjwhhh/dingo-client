import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PayOrderComponent} from './payOrder.component';


const PayRoutes: Routes = [{
  path: 'pay/:userId/:orderId',
  component: PayOrderComponent,
  children: [
    {
      path: '',
      component: PayOrderComponent
    },
  ]
},
];

@NgModule({
  imports: [
    RouterModule.forChild(PayRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class PayOrderRoutingModule {
}
