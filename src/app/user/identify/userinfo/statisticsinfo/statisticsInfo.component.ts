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

  orderNumber = 0;
  cancelNumber = 0;
  cost = 0;

  orderRecordList: OrderRecord[] = [];

  constructor(private identifyService: IdentifyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.userId = this.identifyService.getUserId();
    this.getUserOrderRecordList();
  }

  getUserOrderRecordList() {
    this.identifyService.getUserOrderRecord(this.userId).then(orderRecordList => this.setOrderRecordList(orderRecordList));
  }

  setOrderRecordList(orderRecordList: OrderRecord[]) {
    this.orderRecordList = orderRecordList;
    for (let i = 0; i < this.orderRecordList.length; i++) {
      if (this.orderRecordList[i].orderAction === 'ORDER') {
        this.orderNumber++;
        this.cost += this.orderRecordList[i].cost;
      } else if (this.orderRecordList[i].orderAction === 'CANCEL') {
        this.cancelNumber++;
        this.cost -= this.orderRecordList[i].cost;
      }
      console.log(this.cost);
    }
  }
}
