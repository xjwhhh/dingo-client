import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Show} from '../../../entity/show';
import {ShowService} from '../show.service';
import {ShowSeat} from '../../../entity/showseat';
import {ResultMessage} from '../../../entity/resultmessage';

@Component({
  selector: 'app-show-select',
  templateUrl: './selectSeat.component.html',
  styleUrls: ['./selectSeat.component.css'],
})
export class ShowSelectSeatComponent implements OnInit {

  userId: number;
  showId: number;
  show: Show = new Show();

  showSeatList: ShowSeat[] = [];
  seatList: ShowSeat[] = [];

  selectFirst = 0;
  selectSecond = 0;
  selectThird = 0;

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
    this.showService.getShowById(this.showId).then(show => {
      this.setShow(show);
    });
  }

  setShow(show: Show) {
    // console.log(show);
    this.show = show;
    // 空闲的座位
    // console.log(this.show.seatList);
    // console.log(this.show.seatList[0]);
    // console.log(this.show.seatList[0].id);
    for (let i = 0; i < this.show.seatList.length; i++) {
      // console.log(this.show.seatList[i].booked);
      // console.log(typeof (this.show.seatList[i].booked));
      if (this.show.seatList[i].booked === false) {
        this.showSeatList.push(this.show.seatList[i]);
      }
    }
  }

  // todo 选购之后不能多选
  checkTicketNumber(seat: ShowSeat) {
    let isSaved = false;
    for (let i = 0; i < this.seatList.length; i++) {
      if (seat.id === this.seatList[i].id) {
        isSaved = true;
        if (this.seatList[i].level === '一等座') {
          this.selectFirst--;
        } else if (this.seatList[i].level === '二等座') {
          this.selectSecond--;
        } else {
          this.selectThird--;
        }
        this.seatList.splice(i, 1);
        break;
      }
    }
    if (isSaved === false) {
      if (this.seatList.length >= 6) {
        alert('选座购票最多只可选择6张,请取消选择');
      }
      this.seatList.push(seat);
      if (seat.level === '一等座') {
        this.selectFirst++;
      } else if (seat.level === '二等座') {
        this.selectSecond++;
      } else {
        this.selectThird++;
      }
    }
    console.log(this.seatList);
    // console.log(this.selectThird);
    // console.log(this.selectSecond);
    // console.log(this.selectFirst);
  }

  buyTickets() {
    if (this.seatList.length > 6) {
      alert('选座购票每单最多只可选择6张');
    } else {
      const seatIdList = [];
      // console.log(this.seatList);
      for (let i = 0; i < this.seatList.length; i++) {
        seatIdList.push(this.seatList[i].id);
      }
      const seatIdJson = JSON.stringify(seatIdList);
      this.showService.reserveChoose(seatIdJson, this.userId, this.show.venueId, this.showId)
        .then(orderId => this.checkReserveResult(orderId));
    }
  }

  checkReserveResult(orderId: number) {
    console.log(orderId);
    if (orderId !== -1) {
      alert('订票成功');
      this.router.navigate(['/pay' + '/' + this.userId + '/' + orderId]);
    } else {
      alert('订票失败，请刷新重试');
    }
  }

  goBack() {
    this.showService.setShowTyep(this.show.showType);
    this.router.navigate(['/show/' + this.show.showType + '/' + this.userId + '/display']);
  }


}
