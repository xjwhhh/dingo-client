import {Component, OnInit} from '@angular/core';
import {VenueShowService} from './show.service';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Show} from '../../entity/show';

@Component({
  selector: 'app-venue-show',
  templateUrl: './show.component.html',
  // styleUrls: ['./show.component.css'],
})
export class VenueShowComponent implements OnInit {

  userId: number;
  showType: string;
  showList: Show[];

  constructor(private showService: VenueShowService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  getShowList() {
    this.showList = [];
  }


}
