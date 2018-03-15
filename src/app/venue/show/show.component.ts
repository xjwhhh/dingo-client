import {Component, OnInit} from '@angular/core';
import {VenueShowService} from './show.service';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Show} from '../../entity/show';
import {ProgressType} from '../../entity/progresstype';

@Component({
  selector: 'app-venue-show',
  templateUrl: './show.component.html',
  // styleUrls: ['./show.component.css'],
})
export class VenueShowComponent implements OnInit {

  userId: number;
  showType: ProgressType;
  showList: Show[];

  constructor(private showService: VenueShowService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  getShowList(showTypeString: string) {
    switch (showTypeString) {
      case 'undetermined' :
        this.showType = ProgressType.UNDETERMINED;
        break;
      case 'preSale' :
        this.showType = ProgressType.UNDETERMINED;
        break;
      case 'start' :
        this.showType = ProgressType.UNDETERMINED;
        break;
      case 'end' :
        this.showType = ProgressType.UNDETERMINED;
        break;
    }
    this.showService.getShowByType(this.showType).then(showList => this.showList = showList);
  }

  gotoCheckTicket(showId: number) {
    this.showService.setShowId(showId);
    this.router.navigate(['/checkTicket']);
  }


}
