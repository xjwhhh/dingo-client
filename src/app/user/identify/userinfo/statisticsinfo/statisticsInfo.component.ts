import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {IdentifyService} from '../../identify.service';
import {User} from '../../../../entity/user';
import {OrderRecord} from '../../../../entity/orderRecord';


@Component({
  selector: 'app-user-info-statistics-info',
  templateUrl: './statisticsInfo.component.html',
  styleUrls: ['./statisticsInfo.component.css'],
})
export class UserStatisticsInfoComponent implements OnInit {

  userId: number;
  user: User = new User();

  orderRecordList: OrderRecord[] = [];

  constructor(private identifyService: IdentifyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.userId = this.identifyService.getUserId();
    this.getUserOrderList();
  }

  getUserOrderList() {
    this.identifyService.getUserOrderRecord(this.userId).then(orderRecordList => this.orderRecordList = orderRecordList);
  }
}
