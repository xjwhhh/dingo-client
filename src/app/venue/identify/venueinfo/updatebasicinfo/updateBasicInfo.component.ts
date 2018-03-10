import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Venue} from '../../../../entity/venue';
import {VenueIdentifyService} from '../../identify.service';


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

  doUpdate() {
  }
}
