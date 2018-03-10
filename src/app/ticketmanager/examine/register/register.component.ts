import {Component, OnInit} from '@angular/core';
import {VenueApplication} from '../../../entity/VenueApplication';
import {TicketManagerExamineService} from '../examine.service';
import {VenueApplicationType} from '../../../entity/VenueApplicationType';
import {ResultMessage} from '../../../entity/resultmessage';
import {Venue} from '../../../entity/venue';


@Component({
  selector: 'app-ticket-manager-examine-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class TicketManagerExamineRegisterComponent implements OnInit {

  venueApplicationList: VenueApplication[] = [];

  venueList: Venue[] = [];

  ngOnInit() {
    this.getRegisterApplication();
  }

  constructor(private examineService: TicketManagerExamineService) {
  }

  getRegisterApplication() {
    this.examineService.getApplication(VenueApplicationType.REGISTER).then(list => this.parseVenueInfo(list));
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
    // console.log(result);
    // console.log(typeof (result));
    // console.log(result.toString());
    // console.log(ResultMessage.SUCCESS.toString());
    if (result.toString() === 'SUCCESS') {
      alert('通过申请成功');
    } else {
      alert('通过申请失败，请稍后重试');
    }
  }
}
