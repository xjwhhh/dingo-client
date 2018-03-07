import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TicketManagerExamineComponent} from './examine.component';
import {TicketManagerExamineRegisterComponent} from './register/register.component';
import {TicketManagerExamineUpdateComponent} from './update/update.component';

const IdentifyRoutes: Routes = [{
  path: 'examine',
  component: TicketManagerExamineComponent,
  children: [
    {
      path: '',
      component: TicketManagerExamineComponent,
    },
    {
      path: 'register',
      component: TicketManagerExamineRegisterComponent,
    },
    {
      path: 'update',
      component: TicketManagerExamineUpdateComponent,
    }
  ]
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
export class TicketManagerExamineRoutingModule {
}
