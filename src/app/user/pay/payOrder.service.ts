import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {Show} from '../../entity/show';
import {ResultMessage} from '../../entity/resultmessage';
import {Order} from '../../entity/order';
import {User} from '../../entity/user';

@Injectable()
export class PayOrderService {

  userId: number;
  showType: string;

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  private payOrderUrl = 'http://localhost:8080/order/pay';
  private cancelOrderUrl = 'http://localhost:8080/order/cancel';
  private getOrderUrl = 'http://localhost:8080/order/getOrderById';

  private getUserBasicInfoUrl = 'http://localhost:8080/user/getUserById';


  constructor(private http: Http, private router: Router) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  setUserId(userId: number) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }


  setShowTyep(showType: string) {
    this.showType = showType;
  }

  getShowType() {
    return this.showType;
  }


  getUserBasicInfo(userId: number): Promise<User> {
    const data = new URLSearchParams();
    data.append('userId', userId + '');
    return this.http.post(this.getUserBasicInfoUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  getOrderById(orderId: number): Promise<Order> {
    const data = new URLSearchParams();
    data.append('orderId', orderId + '');
    return this.http.post(this.getOrderUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Order)
      .catch(this.handleError);
  }

  payOrder(orderId: number, couponType: number): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('orderId', orderId + '');
    data.append('couponType', couponType+'');
    return this.http.post(this.payOrderUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as ResultMessage)
      .catch(this.handleError);
  }

  cancelOrder(orderId: number): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('orderId', orderId + '');
    return this.http.post(this.cancelOrderUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as ResultMessage)
      .catch(this.handleError);
  }


}
