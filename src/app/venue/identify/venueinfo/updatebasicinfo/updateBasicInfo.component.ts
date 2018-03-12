import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Venue} from '../../../../entity/venue';
import {VenueIdentifyService} from '../../identify.service';
import {ResultMessage} from '../../../../entity/resultmessage';


@Component({
  selector: 'app-venue-info-update-basic-info',
  templateUrl: './updateBasicInfo.component.html',
  styleUrls: ['./updateBasicInfo.component.css'],
})
export class VenueUpdateBasicInfoComponent implements OnInit {

  venueId: number;
  venue: Venue = new Venue();

  firstSeatNumber = 0;
  secondSeatNumber = 0;
  thirdSeatNumber = 0;

  constructor(private identifyService: VenueIdentifyService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.venueId = this.identifyService.getVenueId();
    this.getVenueBasicInfo();
  }

  getVenueBasicInfo() {
    this.identifyService.getVenueBasicInfo(this.venueId)
      .then(venue => this.setVenue(venue));
  }

  setVenue(venue: Venue) {
    this.venue = venue;
    if (this.venue.seatList !== null) {
      for (let i = 0; i < this.venue.seatList.length; i++) {
        if (this.venue.seatList[i].level === '一等座') {
          this.firstSeatNumber++;
        } else if (this.venue.seatList[i].level === '二等座') {
          this.secondSeatNumber++;
        } else if (this.venue.seatList[i].level === '三等座') {
          this.thirdSeatNumber++;
        }
      }
    }
  }

  doUpdate() {
    const venueJson = JSON.stringify(this.venue);
    this.identifyService.updateVenueInfo(venueJson, this.firstSeatNumber, this.secondSeatNumber, this.thirdSeatNumber).then(result => this.checkUpdateResult(result));
  }

  checkUpdateResult(result: ResultMessage) {
    if (result.toString() === 'SUCCESS') {
      alert('申请更新成功，等待管理员批准');
      this.router.navigate(['/venueIdentify/userInfo/' + this.venueId + '/basicInfo']);
    } else {
      alert('申请更新失败，请稍后重试');
    }
  }
}
