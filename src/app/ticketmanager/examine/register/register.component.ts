import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {VenueApplication} from '../../../entity/VenueApplication';
import {TicketManagerExamineService} from '../examine.service';
import {VenueApplicationType} from '../../../entity/VenueApplicationType';
import {ResultMessage} from '../../../entity/resultmessage';


@Component({
  selector: 'app-ticket-manager-examine-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class TicketManagerExamineRegisterComponent implements OnInit {

  venueApplicationList: VenueApplication[];

  ngOnInit() {
  }

  constructor(private examineService: TicketManagerExamineService) {
  }

  getUpdateApplication() {
    this.examineService.getApplication(VenueApplicationType.UPDATE).then(list => this.venueApplicationList = list);
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
