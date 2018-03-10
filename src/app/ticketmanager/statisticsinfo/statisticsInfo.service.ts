import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {TicketManager} from '../../entity/ticketmanager';
import {Venue} from '../../entity/venue';
import {User} from '../../entity/user';

@Injectable()
export class TicketManagerStatisticsInfoService {

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  private getUserListUrl = 'http://localhost:8080/user/userList';
  private getVenueListUrl = 'http://localhost:8080/venue/venueList';

  constructor(private http: Http, private router: Router) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getVenueList(): Promise<Venue[]> {
    const data = new URLSearchParams();
    return this.http.post(this.getVenueListUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as TicketManager)
      .catch(this.handleError);
  }

  getUserList(): Promise<User[]> {
    const data = new URLSearchParams();
    return this.http.post(this.getUserListUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as TicketManager)
      .catch(this.handleError);
  }
}
