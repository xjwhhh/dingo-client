import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Show} from '../../../entity/show';
import {ShowService} from '../show.service';
import {ShowSeat} from '../../../entity/showseat';

@Component({
  selector: 'app-show-select',
  templateUrl: './selectSeat.component.html',
  styleUrls: ['./selectSeat.component.css'],
})
export class ShowSelectSeatComponent implements OnInit {

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

  checkTicketNumber(seat: ShowSeat) {
    console.log(seat);
  }


}
