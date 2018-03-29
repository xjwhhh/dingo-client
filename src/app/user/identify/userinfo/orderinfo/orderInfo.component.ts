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
  orderList: Order[] = [];
  showOrderList: Order[] = [];
  orderState: string;

  unPaid = false;
  unTicketConfirmed = false;
  unStart = false;
  end = false;
  cancelled = false;

  constructor(private identifyService: IdentifyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.userId = this.identifyService.getUserId();
    console.log(this.userId);
    this.getUserOrder();
  }

  getUserOrder() {

    this.identifyService.getUserOrder(this.userId).then(orderList => {
      this.orderList = orderList;
    });
  }

  setOrderList(orderStateString: string) {
    this.reset();
    switch (orderStateString) {
      case 'UNPAID':
        this.unPaid = true;
        break;
      case 'UNTICKETCONFIRMED':
        this.unTicketConfirmed = true;
        break;
      case 'UNSTART':
        this.unStart = true;
        break;
      case 'END':
        this.end = true;
        break;
      case 'CANCELLED':
        this.cancelled = true;
        break;
    }
    this.orderState = orderStateString;
    for (let i = 0; i < this.orderList.length; i++) {
      if (this.orderList[i].state === this.orderState) {
        this.showOrderList.push(this.orderList[i]);
      }
    }
  }

  reset() {
    this.showOrderList.splice(0, this.showOrderList.length);
    this.unPaid = false;
    this.unTicketConfirmed = false;
    this.unStart = false;
    this.end = false;
    this.cancelled = false;
  }

  gotoPay(orderId: number) {
    this.router.navigate(['../../../../pay/' + this.userId + '/' + orderId]);
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
