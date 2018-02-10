import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {ShowComponent} from './user/show/show.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
