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
  orderList: Order[];
  orderState: OrderState;

  constructor(private identifyService: VenueIdentifyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.venueId = params['venueId'];
    });
    // this.showType = this.route.snapshot.params['type'];
    console.log(this.venueId);
  }

  getVenueOrder(orderStateString: string) {
    switch (orderStateString) {
      case 'unPaid':
        this.orderState = OrderState.UNPAID;
        break;
      case 'unTicketConfirmed':
        this.orderState = OrderState.UNTICKETCONFIRMED;
        break;
      case 'unStart':
        this.orderState = OrderState.UNSTART;
        break;
      case 'end':
        this.orderState = OrderState.END;
        break;
      case 'cancelled':
        this.orderState = OrderState.CANCELLED;
        break;
    }
    this.identifyService.getVenueOrder(this.venueId, this.orderState).then(orderList => this.orderList = orderList);
  }
}
