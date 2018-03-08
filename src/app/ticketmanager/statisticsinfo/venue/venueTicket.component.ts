import {Component, OnInit} from '@angular/core';
import {TicketManagerStatisticsInfoService} from '../statisticsInfo.service';
import {Venue} from '../../../entity/venue';


@Component({
  selector: 'app-ticket-manager-ticket-venue',
  templateUrl: './venueTicket.component.html',
  styleUrls: ['./venueTicket.component.css'],
})
export class TicketManagerVenueTicketComponent implements OnInit {

  venueList: Venue[];

  ngOnInit() {
  }

  constructor(private statisticsService: TicketManagerStatisticsInfoService) {
  }

  getUserList() {
    this.statisticsService.getVenueList().then(list => this.venueList = list);
  }
}
