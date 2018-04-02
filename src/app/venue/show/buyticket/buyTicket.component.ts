import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VenueShowService} from '../show.service';
import {Show} from '../../../entity/show';
import {ShowSeat} from '../../../entity/showseat';

@Component({
  selector: 'app-venue-show-buy-ticket',
  templateUrl: './buyTicket.component.html',
  styleUrls: ['./buyTicket.component.css'],
})
export class VenueBuyTicketComponent implements OnInit {

  showId: number;
  show: Show = new Show();

  userAccount: string;
  userPassword: string;

  seatList: ShowSeat[] = [];

  firstSeatNumber = 0;
  secondSeatNumber = 0;
  thirdSeatNumber = 0;


  constructor(private showService: VenueShowService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.showId = this.showService.getShowId();
    this.getShow();
  }

  getShow() {
    this.showService.getShowById(this.showId).then(show => this.setShow(show));
  }

  setShow(show: Show) {
    this.show = show;
    this.seatList = this.show.seatList;
    for (let i = 0; i < this.seatList.length; i++) {
      if (this.seatList[i].booked === false) {
        if (this.seatList[i].level === '一等座') {
          this.firstSeatNumber++;
        } else if (this.seatList[i].level === '二等座') {
          this.secondSeatNumber++;
        } else {
          this.thirdSeatNumber++;
        }
      }
    }
  }

  buyTickets(firstNumber: string, secondNumber: string, thirdNumber: string, account: string, password: string) {
    if (parseInt(firstNumber, 0) > this.firstSeatNumber
      || parseInt(secondNumber, 0) > this.secondSeatNumber
      || parseInt(thirdNumber, 0) > this.thirdSeatNumber) {
      alert('座位数量不足');
    } else {
      console.log(firstNumber + secondNumber + thirdNumber);
      this.userAccount = account;
      this.userPassword = password;
      if (parseInt(firstNumber, 0) + parseInt(secondNumber, 0) + parseInt(thirdNumber, 0) > 20) {
        alert('立即购票每单最多只可选择20张');
      } else if (parseInt(firstNumber, 0) + parseInt(secondNumber, 0) + parseInt(thirdNumber, 0) <= 0) {
        alert('至少购买一张票');
      } else {
        this.showService
          .offLineBuyTicket(parseInt(firstNumber, 0),
            parseInt(firstNumber, 0), parseInt(thirdNumber, 0),
            this.userAccount, this.userPassword, this.show.venueId, this.showId)
          .then(orderId => this.checkReserveResult(orderId));
      }
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
