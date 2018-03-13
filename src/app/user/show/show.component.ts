import {Component, OnInit} from '@angular/core';
import {ShowService} from './show.service';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Show} from '../../entity/show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  // styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {

  userId: number;
  showType: string;
  showList: Show[];

  constructor(private showService: ShowService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.showType = params['type'];
    });
    // this.showType = this.route.snapshot.params['type'];
    console.log(this.userId);
    console.log(this.showType);
    this.showService.setUserId(this.userId);
    this.showService.setShowTyep(this.showType);
    // this.getShowList();
  }

  // getShowList() {
  //   this.showService.getShowByType(this.showType).then(list => this.showList = list);
  // }


}
