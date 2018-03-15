import {Component, OnInit} from '@angular/core';
import {TicketManagerStatisticsInfoService} from '../statisticsInfo.service';
import {User} from '../../../entity/user';


@Component({
  selector: 'app-ticket-manager-ticket-user',
  templateUrl: './userTicket.component.html',
  styleUrls: ['./userTicket.component.css'],
})
export class TicketManagerUserTicketComponent implements OnInit {

  userList: User[] = [];
  showUserList: User[] = [];

  ngOnInit() {
    this.getUserList();
  }

  constructor(private statisticsService: TicketManagerStatisticsInfoService) {
  }

  getUserList() {
    this.statisticsService.getUserList().then(list => this.initList(list));
  }

  initList(userList: User[]) {
    this.userList = userList;
    this.showUserList = userList;
  }

  searchUser(text: string) {
    this.showUserList.splice(0, this.showUserList.length);
    for (let i = 0; i < this.userList.length; i++) {
      if ((this.userList[i].id === parseInt(text, 10)) || (this.userList[i].name.indexOf(text) !== -1)) {
        this.showUserList.push(this.userList[i]);
      }
    }
  }

}
