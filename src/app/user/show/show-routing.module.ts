import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShowComponent} from './show.component';
import {ShowSelectSeatComponent} from './selectseat/selectSeat.component';
import {ShowNoSelectSeatComponent} from './noselectseat/noSelectSeat.component';
import {DisPlayShowComponent} from './displayshow/disPlayShow.component';

const ShowRoutes: Routes = [{
  path: 'show/:type/:userId',
  component: ShowComponent,
  children: [
    {
      path: '',
      component: DisPlayShowComponent
    },
    {
      path: 'disPlay',
      component: DisPlayShowComponent
    },
    {
      path: 'select/:showId',
      component: ShowSelectSeatComponent,
    },
    {
      path: 'noSelect/:showId',
      component: ShowNoSelectSeatComponent,
    }
  ]
},
];

@NgModule({
  imports: [
    RouterModule.forChild(ShowRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class ShowRoutingModule {
}
