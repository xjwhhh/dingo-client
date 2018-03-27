import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Show} from '../../../entity/show';
import {VenueShowService} from '../show.service';

@Component({
  selector: 'app-show-display',
  templateUrl: './displayShow.component.html',
  // styleUrls: ['./show.component.css'],
})
export class VenueDisPlayShowComponent implements OnInit {

  userId: number;
  venueId: number;
  progressType: string;
  showList: Show[] = [];

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
  }

  getShowList(progressType: string) {
    // switch (showTypeString) {
    //   case 'PRESALE' :
    //     this.showType = ProgressType.PRESALE;
    //     break;
    //   case 'START' :
    //     this.showType = ProgressType.START;
    //     break;
    //   case 'END' :
    //     this.showType = ProgressType.END;
    //     break;
    // }
    this.progressType = progressType;
    // console.log(this.progressType);
    this.showService.getShowByVenueId(this.venueId).then(showList => this.setShowList(showList));
  }

  setShowList(showList: Show[]) {
    this.showList.splice(0, this.showList.length);
    for (let i = 0; i < showList.length; i++) {
      // console.log(showList[i].progressType);
      // console.log(this.progressType);
      // console.log(showList[i].progressType === this.progressType);
      if (showList[i].progressType === this.progressType) {
        // console.log('23');
        this.showList.push(showList[i]);
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
