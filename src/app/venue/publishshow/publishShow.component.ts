import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Show} from '../../entity/show';
import {PublishShowService} from './publishShow.service';
import {ResultMessage} from '../../entity/resultmessage';
import {Venue} from '../../entity/venue';
import {VenueIdentifyComponent} from '../identify/identify.component';
import {VenueIdentifyService} from '../identify/identify.service';

@Component({
  selector: 'app-venue-publish-show',
  templateUrl: './publishShow.component.html',
  styleUrls: ['./publishShow.component.css'],
})
export class VenuePublishShowComponent implements OnInit {

  venueId: number;
  venue: Venue = new Venue();

  show: Show = new Show();

  minDate: Date;

  firstSeatCost = 0;
  secondSeatCost = 0;
  thirdSeatCost = 0;


  constructor(private publishShowService: PublishShowService,
              private identifyService: VenueIdentifyService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.venueId = params['venueId'];
    });
    console.log(this.venueId);

    this.identifyService.getVenueBasicInfo(this.venueId).then(venue => this.venue = venue);

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  publishShow() {
    this.show.progressType = 'PRESALE';
    this.show.venueId = this.venueId;
    if (this.venue.seatList !== null) {
      this.show.totalSeats = this.venue.seatList.length;
      this.show.currentSeats = this.venue.seatList.length;
    } else {
      this.show.totalSeats = 0;
      this.show.currentSeats = 0;
    }
    this.show.earning = 0;
    const showJson = JSON.stringify(this.show);
    console.log(showJson);
    this.publishShowService.publishShow(showJson).then(result => this.checkPublishResult(result));
  }

  checkPublishResult(result: ResultMessage) {
    if (result.toString() === 'SUCCESS') {
      alert('发布演出计划成功');
    } else {
      alert('发布演出计划失败');
    }
  }

}
