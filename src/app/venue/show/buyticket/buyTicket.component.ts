import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VenueShowService} from '../show.service';
import {Show} from '../../../entity/show';

@Component({
  selector: 'app-venue-show-buy-ticket',
  templateUrl: './buyTicket.component.html',
  styleUrls: ['./buyTicket.component.css'],
})
export class VenueBuyTicketComponent implements OnInit {

  showId: number;
  show: Show = new Show();

  userAccount: number;
  userPassword: number;


  constructor(private showService: VenueShowService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.showId = this.showService.getShowId();
    this.getShow();
  }

  getShow() {
    this.showService.getShowById(this.showId).then(show => this.show = show);
  }

  buyTickets(firstNumber: number, secondNumber: number, thirdNumber: number) {
    console.log(firstNumber + secondNumber + thirdNumber);
    if (firstNumber + secondNumber + thirdNumber > 20) {
      alert('立即购票每单最多只可选择20张');
    } else {
      this.showService
        .offLineBuyTicket(firstNumber, secondNumber, thirdNumber, this.userAccount, this.userPassword, this.show.venueId, this.showId)
        .then(orderId => this.checkReserveResult(orderId));
    }
  }

  checkReserveResult(orderId: number) {
    console.log(orderId);
    if (orderId === -1) {
      alert('账号密码错误');
    } else if (orderId === -2) {
      alert('账户余额不足');
    } else {
      alert('现场订票成功');
    }
  }


}
