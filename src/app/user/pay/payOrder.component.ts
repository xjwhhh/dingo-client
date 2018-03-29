import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
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
export class PayOrderComponent implements OnInit, AfterViewInit, OnDestroy {

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

  endDate: number;

  // 定时器
  private timer;

  // 小时差
  hour: number;
  // 分钟差
  minute: number;
  // 秒数差
  second: number;
  // 时间差
  _diff: number;

  couponType = -1;

  deadline: Date = new Date();


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
    this.endDate = 900;
  }

  getUser() {
    this.payOrderService.getUserBasicInfo(this.userId).then(user => this.setUser(user));
  }

  setUser(user: User) {
    this.user = user;
    for (let i = 0; i < user.couponList.length; i++) {
      if (user.couponList[i].type === 1) {
        this.firstCouponNumber++;
        // this.firstExist = true;
      } else if (user.couponList[i].type === 2) {
        this.secondCouponNumber++;
        // this.secondExist = true;
      } else if (user.couponList[i].type === 3) {
        this.thirdCouponNumber++;
        // this.thirdExist = true;
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
    // this.deadline=this.order.orderTime

  }

  setCouponType(couponType: number) {
    this.couponType = couponType;
  }

  pay() {
    if (this.user.balance < this.order.cost) {
      alert('对不起，账户余额不足');
    } else {
      this.payOrderService.payOrder(this.orderId, this.couponType).then(result => this.checkPayResult(result));
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


  private get diff() {
    return this._diff;
  }

  private set diff(val) {
    this._diff = Math.floor(val / 1000);
    this.hour = Math.floor(this._diff / 3600);
    this.minute = Math.floor((this._diff % 3600) / 60);
    this.second = (this._diff % 3600) % 60;
  }


  // 每一秒更新时间差
  ngAfterViewInit() {
    this.timer = setInterval(() => {
      this.diff = --this.endDate;
    }, 1000);
  }

  // 销毁组件时清除定时器
  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }


}
