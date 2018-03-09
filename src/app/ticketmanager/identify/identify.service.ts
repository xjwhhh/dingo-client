import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {TicketManager} from '../../entity/ticketmanager';

@Injectable()
export class TicketManagerIdentifyService {

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  private loginUrl = 'http://localhost:8080/ticketManager/login';


  constructor(private http: Http, private router: Router) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  login(account: string, password: string): Promise<TicketManager> {
    console.log('111');
    const data = new URLSearchParams();
    data.append('account', account);
    data.append('password', password);
    return this.http.post(this.loginUrl, data, this.options)
      .toPromise()
      .then(response => {console.log('222');response.json() as TicketManager})
      .catch(this.handleError);
  }
}
