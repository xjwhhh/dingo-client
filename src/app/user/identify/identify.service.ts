import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {User} from '../../entity/user';
import {OrderState} from '../../entity/orderstate';
import {Order} from '../../entity/order';
import {ResultMessage} from '../../entity/resultmessage';

@Injectable()
export class IdentifyService {
  userId = 1;
  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  private registerUrl = 'http://localhost:8080/user/register';
  private loginUrl = 'http://localhost:8080/user/login';
  private getUserBasicInfoUrl = 'http://localhost:8080/user/getUserById';
  private getUserOrderUrl = 'http://localhost:8080/order/getOrderByUserId';
  private updateUserBasicInfoUrl = 'http://localhost:8080/user/update';
  private emailConfirmationUrl = 'http://localhost:8080/user/emailConfirmation';


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

  getUserOrder(userId: number, orderState: OrderState): Promise<Order[]> {
    const data = new URLSearchParams();
    data.append('userId', userId + '');
    data.append('orderState', orderState + '');
    return this.http.post(this.getUserOrderUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Order[])
      .catch(this.handleError);
  }

}
