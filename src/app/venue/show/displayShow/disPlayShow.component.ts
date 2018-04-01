import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Show} from '../../../entity/show';
import {VenueShowService} from '../show.service';

@Component({
  selector: 'app-show-display',
  templateUrl: './displayShow.component.html',
  styleUrls: ['./displayShow.component.css'],
})
export class VenueDisPlayShowComponent implements OnInit {

  userId: number;
  venueId: number;
  progressType: string;
  showList: Show[] = [];
  showShowList: Show[] = [];
  // preSaleList: Show[] = [];
  // notPreSaleList: Show[] = [];

  constructor(private showService: VenueShowService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.venueId = params['venueId'];
    });
    this.showService.setvenueId(this.venueId);
    this.getShowList();
  }

  getShowList() {
    this.showService.getShowByVenueId(this.venueId).then(showList => this.showList = showList);
  }

  setShowList(progressType: string) {
    this.progressType = progressType;
    this.showShowList.splice(0, this.showShowList.length);
    // this.preSaleList.splice(0, this.preSaleList.length);
    // this.notPreSaleList.splice(0, this.notPreSaleList.length);
    for (let i = 0; i < this.showList.length; i++) {
      if (this.showList[i].progressType === this.progressType) {
        const show = this.showList[i];
        show.startTime = show.startTime.split(' ')[0];
        this.showShowList.push(show);
        // if (show.progressType === 'PRESALE') {
        //   this.preSaleList.push(show);
        // } else {
        //   this.notPreSaleList.push(show);
        // }
      }
    }
  }

  gotoCheckTicket(showId: number) {
    this.showService.setShowId(showId);
    this.router.navigate(['/venueShow/' + this.venueId + '/checkTicket']);
  }

  gotoBuyTicket(showId: number) {
    this.showService.setShowId(showId);
    this.router.navigate(['/venueShow/' + this.venueId + '/buyTicket']);
  }


}
