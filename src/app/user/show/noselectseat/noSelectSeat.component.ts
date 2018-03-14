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

  seatlist: ShowSeat[] = [];

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
    this.showService.getShowById(this.showId).then(show => this.show = show);
  }

  buyTickets(firstNumber: number, secondNumber: number, thirdNumber: number) {
    if (firstNumber + secondNumber + thirdNumber > 20) {
      alert('立即购票每单最多只可选择20张');
    } else {
      this.showService.reserveNoChoose(firstNumber, secondNumber, thirdNumber, this.userId, this.show.venueId, this.showId)
        .then(orderId => this.checkReserveResult(orderId));
    }
  }

  checkTicketNumber(seat: ShowSeat) {
    console.log(seat);
  }


  checkReserveResult(orderId: number) {
    console.log(orderId);
    if (orderId !== -1) {
      alert('订票成功');
      // this.router.navigate(['../pay', orderId]);
    } else {
      alert('订票失败，请刷新重试');
    }
  }


}
