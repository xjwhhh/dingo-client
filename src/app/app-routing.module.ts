import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {ShowComponent} from './user/show/show.component';
import {VenueIdentifyComponent} from './venue/identify/identify.component';
import {TicketManagerIdentifyComponent} from './ticketmanager/identify/identify.component';
import {TicketManagerExamineComponent} from './ticketmanager/examine/examine.component';
import {TicketManagerSettleComponent} from './ticketmanager/settle/settle.component';
import {TicketManagerStatisticsInfoComponent} from './ticketmanager/statisticsinfo/statisticsInfo.component';
import {VenuePublishShowComponent} from './venue/publishshow/publishShow.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'show/:type/:userId',
    component: ShowComponent,
  },
  {
    path: 'identify',
    loadChildren: 'app/user/identify/identify.module#IdentifyModule',
    data: {
      preload: true
    }
  },
  {
    path: 'venueIdentify',
    component: VenueIdentifyComponent,
  },
  {
    path: 'venuePublishShow/:venueId',
    component: VenuePublishShowComponent,
  },
  {
    path: 'ticketManagerIdentify',
    component: TicketManagerIdentifyComponent,
  },
  {
    path: 'ticketManagerExamine',
    component: TicketManagerExamineComponent,
  },
  {
    path: 'ticketManagerSettle',
    component: TicketManagerSettleComponent,
  },
  {
    path: 'ticketManagerStatisticsInfo',
    component: TicketManagerStatisticsInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
