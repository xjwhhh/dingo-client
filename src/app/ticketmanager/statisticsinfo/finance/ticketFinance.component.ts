import {Component, OnInit} from '@angular/core';
import {User} from '../../../entity/user';
import {TicketManagerStatisticsInfoService} from '../statisticsInfo.service';
import {TicketFinance} from '../../../entity/ticketFinance';


@Component({
  selector: 'app-ticket-manager-ticket-finance',
  templateUrl: './ticketFinance.component.html',
  styleUrls: ['./ticketFinance.component.css'],
})
export class TicketManagerFinanceComponent implements OnInit {

  ticketFinanceList: TicketFinance[] = [];
  showTicketFinanceList: TicketFinance[] = [];

  ngOnInit() {
    this.getUserList();
  }

  constructor(private statisticsService: TicketManagerStatisticsInfoService) {
  }

  getUserList() {
    this.statisticsService.getTicketFinanceList().then(list => this.initList(list));
  }

  initList(ticketFinanceList: TicketFinance[]) {
    this.ticketFinanceList = ticketFinanceList;
    this.showTicketFinanceList = ticketFinanceList;
  }

  searchTicketFinance(text: string) {
    this.showTicketFinanceList.splice(0, this.showTicketFinanceList.length);
    for (let i = 0; i < this.ticketFinanceList.length; i++) {
      if ((this.ticketFinanceList[i].id === parseInt(text, 10)) || (this.ticketFinanceList[i].venueId === parseInt(text, 10))) {
        this.showTicketFinanceList.push(this.ticketFinanceList[i]);
      }
    }
  }
}
