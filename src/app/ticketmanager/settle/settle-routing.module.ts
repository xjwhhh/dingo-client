import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TicketManagerSettleComponent} from './settle.component';

const IdentifyRoutes: Routes = [{
  path: 'settle',
  component: TicketManagerSettleComponent,
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
export class TicketManagerSettleRoutingModule {
}
