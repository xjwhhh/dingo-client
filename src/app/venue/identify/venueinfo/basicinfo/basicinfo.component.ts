import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Venue} from '../../../../entity/venue';
import {VenueIdentifyService} from '../../identify.service';


@Component({
  selector: 'app-venue-info-basic-info',
  templateUrl: './basicInfo.component.html',
  styleUrls: ['./basicInfo.component.css'],
})
export class VenueBasicInfoComponent implements OnInit {

  venueId: number;
  venue: Venue;

  constructor(private identifyService: VenueIdentifyService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.venueId = params['venueId'];
    });
    // this.showType = this.route.snapshot.params['type'];
    console.log(this.venueId);
    this.getVenueBasicInfo();
  }

  getVenueBasicInfo() {
    this.identifyService.getVenueBasicInfo(this.venueId).then(venue => this.venue = venue);
  }
}
