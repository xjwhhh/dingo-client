import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import {TicketManager} from '../../entity/ticketmanager';
import {VenueApplicationType} from '../../entity/VenueApplicationType';
import {VenueApplication} from '../../entity/VenueApplication';
import {ResultMessage} from '../../entity/resultmessage';

@Injectable()
export class TicketManagerExamineService {

  userId: number;
  venueId: number;
  ticketManagerId: number;
  type: string;

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  getApplicationUrl = 'http://localhost:8080/venue/getApplication';
  approveApplicationUrl = 'http://localhost:8080/venue/approveApplication';
  allocateTicketUrl = 'http://localhost:8080/ticketManager/allocateTicket';

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {
  }

  getApplication(type: VenueApplicationType): Promise<VenueApplication[]> {
    const data = new URLSearchParams();
    console.log(type);
    data.append('type', type.toString() + '');
    return this.http.post(this.getApplicationUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as VenueApplication[])
      .catch(this.handleError);
  }

  approveApplication(applicationId: number): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('venueApplicationId', applicationId + '');
    return this.http.post(this.approveApplicationUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as ResultMessage)
      .catch(this.handleError);
  }

  allocateTicket(): Promise<ResultMessage> {
    const data = new URLSearchParams();
    return this.http.post(this.allocateTicketUrl, data, this.options)
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
