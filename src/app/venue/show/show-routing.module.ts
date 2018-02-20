import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VenueShowComponent} from './show.component';

const ShowRoutes: Routes = [{
  path: 'show',
  component: VenueShowComponent,
  children: [
    {
      path: '',
      component: VenueShowComponent,
    },
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
export class VenueShowRoutingModule {
}
