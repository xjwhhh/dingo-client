import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShowComponent} from './show.component';

const ShowRoutes: Routes = [{
  path: 'show/:type/:userId',
  component: ShowComponent,
  children: [
    {
      path: '',
      component: ShowComponent,
    },
  ]
},];

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
