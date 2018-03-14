import {Component, OnInit} from '@angular/core';
import {IdentifyService} from '../../identify.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Order} from '../../../../entity/order';
import {OrderState} from '../../../../entity/orderstate';
import {ResultMessage} from '../../../../entity/resultmessage';


@Component({
  selector: 'app-user-info-order-info',
  templateUrl: './orderInfo.component.html',
  styleUrls: ['./orderInfo.component.css'],
})
export class UserOrderInfoComponent implements OnInit {
  userId: number;
  orderList: Order[];
  orderState: string;

  unPaid = false;
  unTicketConfirmed = false;
  unStart = false;
  end = false;
  cancelled = false;

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
    this.reset();
    switch (orderStateString) {
      case 'unPaid':
        this.unPaid = true;
        break;
      case 'unTicketConfirmed':
        this.unTicketConfirmed = true;
        break;
      case 'unStart':
        this.unStart = true;
        break;
      case 'end':
        this.end = true;
        break;
      case 'cancelled':
        this.cancelled = true;
        break;
    }
    this.orderState = orderStateString;
    this.identifyService.getUserOrder(this.userId, this.orderState).then(orderList => this.orderList = orderList);
  }

  reset() {
    this.unPaid = false;
    this.unTicketConfirmed = false;
    this.unStart = false;
    this.end = false;
    this.cancelled = false;
  }

  gotoPay(orderId: number) {
    this.router.navigate(['../../../../pay', orderId]);
  }

  cancel(orderId: number) {
    this.identifyService.cancelOrder(orderId).then(result => this.checkCancelResult(result));
  }

  checkCancelResult(result: ResultMessage) {
    if (result.toString() === 'SUCCESS') {
      alert('取消订单成功');
    } else {
      alert('取消订单失败，请稍后再试');
    }
  }

  gotoOrderDetail(orderId: number) {

  }


}
