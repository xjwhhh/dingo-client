import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TicketManagerExamineComponent} from './examine.component';
import {TicketManagerExamineRegisterComponent} from './register/register.component';
import {TicketManagerExamineUpdateComponent} from './update/update.component';
import {TicketManagerExamineService} from './examine.service';
import {TicketManagerExamineRoutingModule} from './examine-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TicketManagerExamineRoutingModule,
  ],
  declarations: [
    TicketManagerExamineComponent,
    TicketManagerExamineRegisterComponent,
    TicketManagerExamineUpdateComponent,
  ],
  providers: [TicketManagerExamineService],
  bootstrap: [TicketManagerExamineComponent]
})
export class TicketManagerExamineModule {
}
