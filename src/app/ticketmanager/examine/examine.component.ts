import {Component, OnInit} from '@angular/core';
import {TicketManagerExamineService} from './examine.service';
import {ResultMessage} from '../../entity/resultmessage';


@Component({
  selector: 'app-ticket-manager-examine',
  templateUrl: './examine.component.html',
  styleUrls: ['./examine.component.css'],
})
export class TicketManagerExamineComponent implements OnInit {
  ngOnInit() {
  }


  constructor(private examineService: TicketManagerExamineService) {
  }

  allocateTicket() {
    this.examineService.allocateTicket().then(result => this.checkResult(result));
  }

  checkResult(result: ResultMessage) {
    if (result.toString() === 'SUCCESS') {
      alert('配票成功');
    } else {
      alert('配票失败');
    }
  }
}
