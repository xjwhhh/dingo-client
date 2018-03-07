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
import {TicketManagerComponent} from './ticketmanager/ticketManager.component';

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
    path: 'ticketManagerIdentify',
    component: TicketManagerIdentifyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
