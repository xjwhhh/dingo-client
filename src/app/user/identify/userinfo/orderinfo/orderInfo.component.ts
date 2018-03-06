import {Component, OnInit} from '@angular/core';
import {IdentifyService} from '../../identify.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Order} from '../../../../entity/order';
import {OrderState} from '../../../../entity/orderstate';


@Component({
  selector: 'app-user-info-order-info',
  templateUrl: './orderInfo.component.html',
  styleUrls: ['./orderInfo.component.css'],
})
export class UserOrderInfoComponent implements OnInit {
  userId: number;
  orderList: Order[];
  orderState: OrderState;

  constructor(private identifyService: IdentifyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.userId = params['userId'];
    });
    // this.showType = this.route.snapshot.params['type'];
    console.log(this.userId);
  }

  getUserOrder(orderStateString: string) {
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
    this.identifyService.getUserOrder(this.userId, this.orderState).then(orderList => this.orderList = orderList);
  }
}
