import {Component, OnInit} from '@angular/core';
import {TicketManagerStatisticsInfoService} from '../statisticsInfo.service';
import {User} from '../../../entity/user';


@Component({
  selector: 'app-ticket-manager-ticket-user',
  templateUrl: './userTicket.component.html',
  styleUrls: ['./userTicket.component.css'],
})
export class TicketManagerUserTicketComponent implements OnInit {

  userList: User[];

  ngOnInit() {
  }

  constructor(private statisticsService: TicketManagerStatisticsInfoService) {
  }

  getUserList() {
    this.statisticsService.getUserList().then(list => this.userList = list);
  }

}
