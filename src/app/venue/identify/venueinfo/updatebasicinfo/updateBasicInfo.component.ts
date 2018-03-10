import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Venue} from '../../../../entity/venue';
import {VenueIdentifyService} from '../../identify.service';
import {ResultMessage} from '../../../../entity/resultmessage';
import {add} from 'ngx-bootstrap/chronos';


@Component({
  selector: 'app-venue-info-update-basic-info',
  templateUrl: './updateBasicInfo.component.html',
  styleUrls: ['./updateBasicInfo.component.css'],
})
export class VenueUpdateBasicInfoComponent implements OnInit {

  venueId: number;
  venue: Venue = new Venue();

  constructor(private identifyService: VenueIdentifyService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.venueId = this.identifyService.getVenueId();
    this.getVenueBasicInfo();
  }

  getVenueBasicInfo() {
    this.identifyService.getVenueBasicInfo(this.venueId).then(venue => this.venue = venue);
  }

  doUpdate(name: string, address: string) {
    this.venue.name = name;
    this.venue.address = address;
    const venueJson = JSON.stringify(this.venue);
    this.identifyService.updateVenueInfo(venueJson).then(result => this.checkUpdateResult(result));
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
