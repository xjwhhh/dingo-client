import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import {TicketManager} from '../../entity/ticketmanager';
import {VenueApplicationType} from '../../entity/VenueApplicationType';
import {VenueApplication} from '../../entity/VenueApplication';
import {ResultMessage} from '../../entity/resultmessage';
import {ShowEarning} from '../../entity/showEarning';

@Injectable()
export class TicketManagerSettleService {

  userId: number;
  venueId: number;
  ticketManagerId: number;
  type: string;

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  getApplicationUrl = '';
  approveApplicationUrl = '';
  getUnsettledShowEarningUrl = '';
  doSettleUrl = '';

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {
  }

  getUnSettledShowEarning(): Promise<ShowEarning[]> {
    const data = new URLSearchParams();
    return this.http.post(this.getUnsettledShowEarningUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as ShowEarning[])
      .catch(this.handleError);
  }

  doSettle(showEarningId: number): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('showEarningId',  showEarningId + '');
    return this.http.post(this.doSettleUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as ResultMessage)
      .catch(this.handleError);
  }


  setUserId(userId: number) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }

  setVenueId(venueId: number) {
    this.venueId = venueId;
  }

  getvenueId() {
    return this.venueId;
  }

  setTicketManagerId(ticketManagerId: number) {
    this.ticketManagerId = ticketManagerId;
  }

  getTicketManagerId() {
    return this.ticketManagerId;
  }

  setType(type: string) {
    this.type = type;
  }

  getType() {
    return this.type;
  }


}
