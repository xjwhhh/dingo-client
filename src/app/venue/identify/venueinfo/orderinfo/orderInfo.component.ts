import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {VenueIdentifyService} from '../../identify.service';
import {OrderState} from '../../../../entity/orderstate';
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
    // this.route.params.subscribe((params: Params) => {
    //   this.venueId = params['venueId'];
    // });
    // this.showType = this.route.snapshot.params['type'];
    this.venueId = this.identifyService.getVenueId();
    console.log(this.venueId);
    this.getVenueOrder();
  }

  getVenueOrder() {
    // switch (orderStateString) {
    //   case 'unPaid':
    //     this.orderState = OrderState.UNPAID;
    //     break;
    //   case 'unTicketConfirmed':
    //     this.orderState = OrderState.UNTICKETCONFIRMED;
    //     break;
    //   case 'unStart':
    //     this.orderState = OrderState.UNSTART;
    //     break;
    //   case 'end':
    //     this.orderState = OrderState.END;
    //     break;
    //   case 'cancelled':
    //     this.orderState = OrderState.CANCELLED;
    //     break;
    // }
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
