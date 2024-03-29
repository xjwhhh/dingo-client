import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {User} from '../../entity/user';
import {Order} from '../../entity/order';
import {ResultMessage} from '../../entity/resultmessage';
import {OrderRecord} from '../../entity/orderRecord';

@Injectable()
export class IdentifyService {
  userId = 1;
  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  private registerUrl = 'http://localhost:8080/user/register';
  private loginUrl = 'http://localhost:8080/user/login';
  private getUserBasicInfoUrl = 'http://localhost:8080/user/getUserById';
  private getUserOrderUrl = 'http://localhost:8080/order/getOrderByUserId';
  private getUserOrderRecordUrl = 'http://localhost:8080/order/getOrderRecordByUserId';
  private updateUserBasicInfoUrl = 'http://localhost:8080/user/update';
  private emailConfirmationUrl = 'http://localhost:8080/user/emailConfirmation';
  private cancelOrderUrl = 'http://localhost:8080/order/cancel';
  private cancelUserUrl = 'http://localhost:8080/user/cancel';
  private exchangeCouponUrl = 'http://localhost:8080/user/exchangeCoupon';


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

  register(account: string, password: string): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('account', account);
    data.append('password', password);
    return this.http.post(this.registerUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as ResultMessage)
      .catch(this.handleError);
  }


  login(account: string, password: string): Promise<User> {
    const data = new URLSearchParams();
    data.append('account', account);
    data.append('password', password);
    return this.http.post(this.loginUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  updateBasicInfo(userJson: string): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('userJson', userJson);
    return this.http.post(this.updateUserBasicInfoUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as ResultMessage)
      .catch(this.handleError);
  }

  emailConfirmation(userId: number, emailAddress: string): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('userId', userId + '');
    data.append('emailAddress', emailAddress);
    return this.http.post(this.emailConfirmationUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as ResultMessage)
      .catch(this.handleError);
  }


  getUserBasicInfo(userId: number): Promise<User> {
    const data = new URLSearchParams();
    data.append('userId', userId + '');
    return this.http.post(this.getUserBasicInfoUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  cancelUser(userId: number): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('userId', userId + '');
    return this.http.post(this.cancelUserUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  getUserOrder(userId: number): Promise<Order[]> {
    const data = new URLSearchParams();
    data.append('userId', userId + '');
    return this.http.post(this.getUserOrderUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Order[])
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


  exchangeCoupon(userId: number, couponType: number, couponNumber: number): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('userId', userId + '');
    data.append('couponType', couponType + '');
    data.append('couponNumber', couponNumber + '');
    return this.http.post(this.exchangeCouponUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as ResultMessage)
      .catch(this.handleError);
  }

  getUserOrderRecord(userId: number): Promise<OrderRecord[]> {
    const data = new URLSearchParams();
    data.append('userId', userId + '');
    return this.http.post(this.getUserOrderRecordUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as OrderRecord[])
      .catch(this.handleError);
  }


}
