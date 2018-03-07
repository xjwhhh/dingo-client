import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {TicketManagerComponent} from './ticketManager.component';
import {TicketManagerIdentifyComponent} from './identify/identify.component';
import {TicketManagerExamineComponent} from './examine/examine.component';


const routes: Routes = [
  {
    path: 'ticketManager',
    component: TicketManagerComponent,
    children: [
      {
        path: '',
        component: TicketManagerComponent,
      },
      {
        path: 'identify',
        component: TicketManagerIdentifyComponent,
      },
      {
        path: 'examine',
        component: TicketManagerExamineComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class TicketManagerRoutingModule {
}
