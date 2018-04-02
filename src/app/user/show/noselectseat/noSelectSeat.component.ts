import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Show} from '../../../entity/show';
import {ShowService} from '../show.service';
import {ShowSeat} from '../../../entity/showseat';

@Component({
  selector: 'app-show-no-select',
  templateUrl: './noSelectSeat.component.html',
  styleUrls: ['./noSelectSeat.component.css'],
})
export class ShowNoSelectSeatComponent implements OnInit {

  userId: number;
  showId: number;
  show: Show = new Show();

  seatList: ShowSeat[] = [];

  firstSeatNumber = 0;
  secondSeatNumber = 0;
  thirdSeatNumber = 0;

  constructor(private showService: ShowService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.showId = params['showId'];
    });
    this.userId = this.showService.getUserId();
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

  buyTickets(firstNumber: string, secondNumber: string, thirdNumber: string) {
    if (parseInt(firstNumber, 0) > this.firstSeatNumber
      || parseInt(secondNumber, 0) > this.secondSeatNumber
      || parseInt(thirdNumber, 0) > this.thirdSeatNumber) {
      alert('座位数量不足');
    } else {
      console.log(firstNumber + secondNumber + thirdNumber);
      if (parseInt(firstNumber, 0) + parseInt(secondNumber, 0) + parseInt(thirdNumber, 0) > 20) {
        alert('立即购票每单最多只可选择20张');
      } else if (parseInt(firstNumber, 0) + parseInt(secondNumber, 0) + parseInt(thirdNumber, 0) <= 0) {
        alert('至少购买一张票');
      } else {
        this.showService.reserveNoChoose(parseInt(firstNumber, 0),
          parseInt(firstNumber, 0), parseInt(thirdNumber, 0),
          this.userId, this.show.venueId, this.showId)
          .then(orderId => this.checkReserveResult(orderId));
      }
    }
  }

  checkTicketNumber(seat: ShowSeat) {
    console.log(seat);
  }


  checkReserveResult(orderId: number) {
    console.log(orderId);
    if (orderId !== -1) {
      alert('订票成功');
      this.router.navigate(['../pay/' + '/' + this.userId + '/' + orderId]);
    } else {
      alert('订票失败，请刷新重试');
    }
  }


  goBack() {
    this.showService.setShowTyep(this.show.showType);
    this.router.navigate(['/show/' + this.show.showType + '/' + this.userId + '/display']);
  }


}
