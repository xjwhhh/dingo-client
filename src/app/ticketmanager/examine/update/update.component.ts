import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {TicketManagerExamineService} from '../examine.service';
import {VenueApplication} from '../../../entity/VenueApplication';
import {VenueApplicationType} from '../../../entity/VenueApplicationType';
import {ResultMessage} from '../../../entity/resultmessage';
import {Venue} from '../../../entity/venue';


@Component({
  selector: 'app-ticket-manager-examine-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class TicketManagerExamineUpdateComponent implements OnInit {

  venueApplicationList: VenueApplication[];

  venueList: Venue[];

  ngOnInit() {
  }

  constructor(private examineService: TicketManagerExamineService) {
  }

  getUpdateApplication() {
    this.examineService.getApplication(VenueApplicationType.UPDATE).then(list => this.parseVenueInfo(list));
  }

  parseVenueInfo(venueApplicationList: VenueApplication[]) {
    this.venueApplicationList = venueApplicationList;
    for (let i = 0; i < this.venueApplicationList.length; i++) {
      this.venueList.push(JSON.parse(this.venueApplicationList[i].venueJson));
    }
  }

  approve(applicationId: number) {
    this.examineService.approveApplication(applicationId).then(result => this.checkApproveResult(result));
  }

  checkApproveResult(result: ResultMessage) {
    if (result === ResultMessage.SUCCESS) {
      alert('success');
    } else {
      alert('fail');
    }
  }

}

