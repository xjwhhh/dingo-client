import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {Show} from '../../entity/show';
import {ResultMessage} from '../../entity/resultmessage';
import {ProgressType} from '../../entity/progresstype';
import {OrderState} from '../../entity/orderstate';
import {Order} from '../../entity/order';

@Injectable()
export class VenueShowService {

  venueId = 1;
  showId = 2;

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  private getShowListUrl = 'http://localhost:8080/show';
  private getShowByTypeUrl = 'http://localhost:8080/show/getShowByType';
  private getShowByVenueIdUrl = 'http://localhost:8080/show/getShowByVenueId';
  private getShowByIdUrl = 'http://localhost:8080/show/getShowById';
  private publishShowUrl = 'http://localhost:8080/venue/publishShow';
  private getShowOrderUrl = 'http://localhost:8080/order/getOrderByShowId';
  private doCheckTicketUrl = 'http://localhost:8080/order/checkTicket';


  constructor(private http: Http, private router: Router) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  setvenueId(venueId: number) {
    this.venueId = venueId;
  }

  getVenueId() {
    return this.venueId;
  }

  setShowId(showId: number) {
    this.showId = showId;
  }

  getShowId() {
    return this.showId;
  }


  getShowList(venueId: number): Promise<Show[]> {
    const data = new URLSearchParams();
    data.append('venueId', venueId + '');
    return this.http.post(this.getShowListUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Show[])
      .catch(this.handleError);
  }

  getShowByType(showType: ProgressType): Promise<Show[]> {
    const data = new URLSearchParams();
    data.append('showType', showType + '');
    return this.http.post(this.getShowByTypeUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Show[])
      .catch(this.handleError);
  }

  getShowByVenueId(venueId: number): Promise<Show[]> {
    const data = new URLSearchParams();
    data.append('venueId', venueId + '');
    console.log(venueId);
    return this.http.post(this.getShowByVenueIdUrl, data, this.options)
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

  publishShow(show: Show): Promise<ResultMessage> {
    const data = new URLSearchParams();
    const showJson = '';
    // todo
    data.append('showJson', showJson);
    return this.http.post(this.publishShowUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Show[])
      .catch(this.handleError);
  }

  getShowOrder(showId: number): Promise<Order[]> {
    const data = new URLSearchParams();
    data.append('showId', showId + '');
    return this.http.post(this.getShowOrderUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Order[])
      .catch(this.handleError);
  }

  doCheck(ticketId: number): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('ticketId', ticketId + '');
    return this.http.post(this.doCheckTicketUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Order[])
      .catch(this.handleError);
  }


}
