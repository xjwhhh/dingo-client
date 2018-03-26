import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {User} from '../../../../entity/user';
import {IdentifyService} from '../../identify.service';
import {ResultMessage} from '../../../../entity/resultmessage';


@Component({
  selector: 'app-user-info-basic-info',
  templateUrl: './basicInfo.component.html',
  styleUrls: ['./basicInfo.component.css'],
})
export class UserBasicInfoComponent implements OnInit {
  userId: number;
  user: User = new User();

  firstCouponCost = 100;
  secondCouponCost = 500;
  thirdCouponCost = 1000;

  firstCouponNumber = 0;
  secondCouponNumber = 0;
  thirdCouponNumber = 0;

  constructor(private identifyService: IdentifyService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.userId = this.identifyService.getUserId();
    console.log(this.userId);
    this.getUserBasicInfo();
  }

  getUserBasicInfo() {
    this.identifyService.getUserBasicInfo(this.userId).then(user => this.setUser(user));
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

  gotoUpdateBasicInfo() {
    this.router.navigate(['/identify/userInfo/' + this.userId + '/updateBasicInfo']);
  }

  cancel() {
    this.identifyService.cancelUser(this.userId).then(result => this.checkCancelUser(result));
  }

  checkCancelUser(result: ResultMessage) {
    if (result.toString() === 'SUCCESS') {
      alert('取消会员资格成功');
      this.router.navigate(['/identify/login']);
    } else {
      alert('取消会员资格失败，请稍后重试');
    }
  }

  exchangeCoupon(couponType: number, couponNumber: number) {
    let cost = 0;
    switch (couponType) {
      case 1:
        cost = this.firstCouponCost * couponNumber;
        break;
      case 2:
        cost = this.secondCouponCost * couponNumber;
        break;
      case 3:
        cost = this.thirdCouponCost * couponNumber;
        break;
    }
    if (this.user.currentIntegral < cost) {
      alert('积分余额不足');
    } else {
      this.identifyService.exchangeCoupon(this.userId, couponType, couponNumber).then(result => this.checkExchangeCoupon(result));
    }

  }

  checkExchangeCoupon(result: ResultMessage) {
    if (result.toString() === 'SUCCESS') {
      alert('兑换优惠券成功');
    } else {
      alert('兑换优惠券失败，请稍后重试');
    }
    this.identifyService.getUserBasicInfo(this.userId).then(user => this.setUser(user));
  }
}
