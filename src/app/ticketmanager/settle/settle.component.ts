import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {ResultMessage} from '../../entity/resultmessage';
import {TicketManagerExamineService} from '../examine/examine.service';
import {VenueApplicationType} from '../../entity/VenueApplicationType';
import {TicketManagerSettleService} from './settle.service';
import {ShowEarning} from '../../entity/showEarning';


@Component({
  selector: 'app-ticket-manager-settle',
  templateUrl: './settle.component.html',
  styleUrls: ['./settle.component.css'],
})
export class TicketManagerSettleComponent implements OnInit {

  showEarningList: ShowEarning[];

  ngOnInit() {
  }

  constructor(private settleService: TicketManagerSettleService) {
  }

  getUnSettledList() {
    this.settleService.getUnSettledShowEarning().then(list => this.showEarningList = list);
  }

  doSettle(earningId: number) {
    this.settleService.doSettle(earningId).then(result => this.checkSettleResult(result));
  }

  checkSettleResult(result: ResultMessage) {
    if (result.toString() === 'SUCCESS') {
      alert('success');
    } else {
      alert('fail');
    }
  }

}
