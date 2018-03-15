import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Order} from '../../entity/order';
import {PayOrderService} from './payOrder.service';
import {User} from '../../entity/user';
import {ResultMessage} from '../../entity/resultmessage';

@Component({
  selector: 'app-show-pay',
  templateUrl: './payOrder.component.html',
  styleUrls: ['./payOrder.component.css'],
})
export class PayOrderComponent implements OnInit {

  userId: number;
  orderId: number;

  order: Order = new Order();
  user: User = new User();


  firstCouponNumber = 0;
  secondCouponNumber = 0;
  thirdCouponNumber = 0;

  firstExist = false;
  secondExist = false;
  thirdExist = false;

  constructor(private payOrderService: PayOrderService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.orderId = params['orderId'];
    });
    this.getUser();
    this.getOrder();
  }

  getUser() {
    this.payOrderService.getUserBasicInfo(this.userId).then(user => this.setUser(user));
  }

  setUser(user: User) {
    this.user = user;
    for (let i = 0; i < user.couponList.length; i++) {
      if (user.couponList[i].type === 1) {
        this.firstCouponNumber++;
      } else if (user.couponList[i].type === 2) {
        this.secondCouponNumber++;
      } else if (user.couponList[i].type === 3) {
        this.thirdCouponNumber++;
      }
    }
  }

  getOrder() {
    this.payOrderService.getOrderById(this.orderId).then(order => this.setOrder(order));
  }

  setOrder(order: Order) {
    this.order = order;
    if (this.order.cost >= 2000) {
      this.thirdExist = true;
      this.secondExist = true;
      this.firstExist = true;
    } else if (this.order.cost >= 1000) {
      this.secondExist = true;
      this.firstExist = true;
    } else if (this.order.cost >= 100) {
      this.firstExist = true;
    }
  }

  pay() {
    if (this.user.balance < this.order.cost) {
      alert('对不起，账户余额不足');
    } else {
      this.payOrderService.payOrder(this.orderId).then(result => this.checkPayResult(result));
    }
  }

  checkPayResult(result: ResultMessage) {
    console.log(result);
    if (result.toString() === 'SUCCESS') {
      alert('付款成功');
      // this.router.navigate(['../pay', orderId]);
    } else {
      alert('付款失败，请稍后重试');
    }
  }


}
