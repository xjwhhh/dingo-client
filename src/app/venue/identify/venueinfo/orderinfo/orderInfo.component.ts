import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VenueIdentifyService} from '../../identify.service';
import {Order} from '../../../../entity/order';


@Component({
  selector: 'app-venue-info-order-info',
  templateUrl: './orderInfo.component.html',
  styleUrls: ['./orderInfo.component.css'],
})
export class VenueOrderInfoComponent implements OnInit {

  venueId: number;
  orderList: Order[] = [];
  showOrderList: Order[] = [];
  orderState: string;

  constructor(private identifyService: VenueIdentifyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.venueId = this.identifyService.getVenueId();
    console.log(this.venueId);
    this.getVenueOrder();
  }

  getVenueOrder() {
    this.identifyService.getVenueOrder(this.venueId).then(orderList => this.setOrderList(orderList));
  }

  setOrderList(orderList: Order[]) {
    this.orderList = orderList;
  }

  setShowOrderList(orderState: string) {
    this.orderState = orderState;
    console.log(this.orderState);
    this.showOrderList.splice(0, this.showOrderList.length);
    for (let i = 0; i < this.orderList.length; i++) {
      console.log(this.orderList[i].state);
      if (this.orderList[i].state === this.orderState) {
        this.showOrderList.push(this.orderList[i]);
      }
    }
  }
}
