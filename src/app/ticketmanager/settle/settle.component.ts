import {Component, OnInit} from '@angular/core';
import {ResultMessage} from '../../entity/resultmessage';
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
    this.getUnSettledList();
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
