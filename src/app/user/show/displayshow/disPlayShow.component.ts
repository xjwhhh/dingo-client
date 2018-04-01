import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Show} from '../../../entity/show';
import {ShowService} from '../show.service';

@Component({
  selector: 'app-show-display',
  templateUrl: './displayShow.component.html',
  styleUrls: ['./displayShow.component.css'],
})
export class DisPlayShowComponent implements OnInit {

  userId: number;
  showType: string;
  showList: Show[];

  constructor(private showService: ShowService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userId = this.showService.getUserId();
    this.showType = this.showService.getShowType();
    this.getShowList();
  }

  gotoShow(showType: string) {
    // this.showService.setShowTyep(showType);
    this.router.navigate(['/show/' + showType + '/' + this.userId + '/display']);
    this.showType = showType;
    console.log(showType);
    this.getShowList();
  }

  getShowList() {
    console.log(this.showType);
    this.showService.getShowByType(this.showType).then(list => this.showList = list);
  }


}
