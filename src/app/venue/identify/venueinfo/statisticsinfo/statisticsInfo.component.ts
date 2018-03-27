import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {OrderRecord} from '../../../../entity/orderRecord';
import {User} from '../../../../entity/user';
import {VenueIdentifyService} from '../../identify.service';
import {VenueFinance} from '../../../../entity/veneuFinance';


@Component({
  selector: 'app-venue-info-statistics-info',
  templateUrl: './statisticsInfo.component.html',
  styleUrls: ['./statisticsInfo.component.css'],
})
export class VenueStatisticsInfoComponent implements OnInit {

  venueId: number;

  orderNumber = 0;
  cancelNumber = 0;
  cost = 0;

  orderRecordList: OrderRecord[] = [];
  venueFinanceList: VenueFinance[] = [];

  onlineNumber = 0;
  offlineNumber = 0;

  constructor(private identifyService: VenueIdentifyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.venueId = this.identifyService.getVenueId();
    this.getVenueOrderRecordList();
    this.getVenueFinanceList();
  }

  getVenueOrderRecordList() {
    this.identifyService.getVenueOrderRecord(this.venueId).then(orderRecordList => this.setOrderRecordList(orderRecordList));
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
    }
  }

  getVenueFinanceList() {
    this.identifyService.getVenueFinance(this.venueId).then(venueFinanceList => this.setVenueFinance(venueFinanceList));
  }

  setVenueFinance(venueFinanceList: VenueFinance[]) {
    this.venueFinanceList = venueFinanceList;
    for (let i = 0; i < this.venueFinanceList.length; i++) {
      if (this.venueFinanceList[i].online === true) {
        this.onlineNumber++;
      } else {
        this.offlineNumber++;
      }
    }
  }
}
