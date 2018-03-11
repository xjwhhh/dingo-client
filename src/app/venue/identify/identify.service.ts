import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {OrderState} from '../../entity/orderstate';
import {Order} from '../../entity/order';
import {ResultMessage} from '../../entity/resultmessage';
import {Venue} from '../../entity/venue';

@Injectable()
export class VenueIdentifyService {

  venueId = 1;

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  private registerUrl = 'http://localhost:8080/venue/register';
  private loginUrl = 'http://localhost:8080/venue/login';
  private getVenueBasicInfoUrl = 'http://localhost:8080/venue/getVenueById';
  private updateVenueInfoUrl = 'http://localhost:8080/venue/updateInfo';
  private getVenueOrderUrl = 'http://localhost:8080/order/getOrderByVenueId';
  private getUserBasicInfoUrl = '';
  private getUserOrderUrl = '';


  constructor(private http: Http, private router: Router) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getVenueId() {
    return this.venueId;
  }

  setVenueId(venueId: number) {
    this.venueId = venueId;
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


  login(code: string, password: string): Promise<Venue> {
    const data = new URLSearchParams();
    data.append('code', code);
    data.append('password', password);
    return this.http.post(this.loginUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Venue)
      .catch(this.handleError);
  }

  updateVenueInfo(venueJson: string, one: number, two: number, three: number): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('venueJson', venueJson);
    data.append('one', one + '');
    data.append('two', two + '');
    data.append('three', three + '');
    return this.http.post(this.updateVenueInfoUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as ResultMessage)
      .catch(this.handleError);
  }

  getVenueBasicInfo(venueId: number): Promise<Venue> {
    const data = new URLSearchParams();
    data.append('venueId', venueId + '');
    return this.http.post(this.getVenueBasicInfoUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Venue)
      .catch(this.handleError);
  }

  getVenueOrder(venueId: number, orderState: OrderState): Promise<Order[]> {
    const data = new URLSearchParams();
    data.append('venueId', venueId + '');
    data.append('orderState', orderState + '');
    return this.http.post(this.getVenueOrderUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Order[])
      .catch(this.handleError);
  }

}
