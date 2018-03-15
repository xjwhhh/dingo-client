import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {VenueShowService} from '../show.service';
import {Show} from '../../../entity/show';
import {Order} from '../../../entity/order';
import {ResultMessage} from '../../../entity/resultmessage';

@Component({
  selector: 'app-venue-show-check-ticket',
  templateUrl: './checkTicket.component.html',
  styleUrls: ['./checkTicket.component.css'],
})
export class VenueCheckTicketComponent implements OnInit {

  showId: number;
  show: Show = new Show();

  orderList: Order[] = [];

  constructor(private showService: VenueShowService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.showId = this.showService.getShowId();
  }

  getShow() {
    this.showService.getShowById(this.showId).then(show => this.show = show);
  }

  getOrderList() {
    this.showService.getShowOrder(this.showId).then(list => this.orderList = list);
  }

  doCheck(ticketId: number) {
    this.showService.doCheck(ticketId).then(result => this.checkTicektCheckResult(result));
  }

  checkTicektCheckResult(result: ResultMessage) {
    if (result.toString() === 'SUCCESS') {
      alert('检票登记成功');
    } else {
      alert('检票登记失败');
    }
  }


}
