import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Order} from '../../entity/order';
import {PayOrderService} from './payOrder.service';
import {User} from '../../entity/user';

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
    this.payOrderService.getUserBasicInfo(this.userId).then(user => this.user = user);
  }

  getOrder() {
    this.payOrderService.getOrderById(this.orderId).then(order => this.order = order);
  }

  pay() {
  }


}
