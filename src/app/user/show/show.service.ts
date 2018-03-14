import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {Show} from '../../entity/show';
import {ResultMessage} from '../../entity/resultmessage';
import {Order} from '../../entity/order';

@Injectable()
export class ShowService {

  userId: number;
  showType: string;

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  private getShowListUrl = 'http://localhost:8080/show';
  private getShowByTypeUrl = 'http://localhost:8080/show/getShowByType';
  private getShowByIdUrl = 'http://localhost:8080/show/getShowById';
  private reserveChooseUrl = 'http://localhost:8080/order/saveOrderChoose';
  private reserveNoChooseUrl = 'http://localhost:8080/order/saveOrderNoChoose';
  private payOrderUrl = 'http://localhost:8080/order/pay';
  private cancelOrderUrl = 'http://localhost:8080/order/cancel';
  private getOrderUrl = 'http://localhost:8080/order/getOrderById';


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


  getShowList(showType: string): Promise<Show[]> {
    const data = new URLSearchParams();
    data.append('showType', showType);
    return this.http.post(this.getShowListUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Show[])
      .catch(this.handleError);
  }

  getShowByType(showType: string): Promise<Show[]> {
    const data = new URLSearchParams();
    data.append('showType', showType);
    return this.http.post(this.getShowByTypeUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Show[])
      .catch(this.handleError);
  }

  getShowById(showId: number): Promise<Show> {
    const data = new URLSearchParams();
    data.append('showId', showId + '');
    return this.http.post(this.getShowByIdUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Show)
      .catch(this.handleError);
  }

  reserveChoose(seatIdListJson: string, userId: number, venueId: number, showId: number): Promise<number> {
    const data = new URLSearchParams();
    data.append('seatIdListJson', seatIdListJson);
    data.append('userId', userId + '');
    data.append('venueId', venueId + '');
    data.append('showId', showId + '');
    return this.http.post(this.reserveChooseUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as number)
      .catch(this.handleError);
  }

  reserveNoChoose(orderJson: string): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('orderJson', orderJson);
    return this.http.post(this.reserveNoChooseUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as ResultMessage)
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

  payOrder(orderId: number): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('orderId', orderId + '');
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
