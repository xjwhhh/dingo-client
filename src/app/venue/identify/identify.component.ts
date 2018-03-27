import {Component} from '@angular/core';
import {VenueIdentifyService} from './identify.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-venue-identify',
  templateUrl: './identify.component.html',
  // styleUrls: ['./identify.component.css'],
})
export class VenueIdentifyComponent {
  venueId: number;

  constructor(private identifyService: VenueIdentifyService, private route: ActivatedRoute, private router: Router) {
  }

  gotoShow() {
    this.venueId = this.identifyService.getVenueId();
    if (this.venueId === -1) {
      alert('请先登录');
    } else {
      this.router.navigate(['/venueShow/' + this.venueId]);
    }
  }

  gotoPublishShow() {
    this.venueId = this.identifyService.getVenueId();
    if (this.venueId === -1) {
      alert('请先登录');
    } else {
      this.router.navigate(['/venuePublishShow/' + this.venueId]);
    }
  }
}
