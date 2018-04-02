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
  showVenueList: Venue[];

  ngOnInit() {
    this.getVenueList();
  }

  constructor(private statisticsService: TicketManagerStatisticsInfoService) {
  }

  getVenueList() {
    this.statisticsService.getVenueList().then(list => this.initList(list));
  }

  initList(venueList: Venue[]) {
    this.venueList = venueList;
    this.showVenueList = venueList;
  }

  searchVenue(text: string) {
    this.showVenueList.splice(0, this.showVenueList.length);
    for (let i = 0; i < this.venueList.length; i++) {
      if ((this.venueList[i].id === parseInt(text, 10)) || (this.venueList[i].name.indexOf(text) !== -1)) {
        this.showVenueList.push(this.venueList[i]);
      }
    }
  }
}
