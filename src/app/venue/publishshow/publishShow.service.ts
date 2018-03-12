import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {Show} from '../../entity/show';
import {ResultMessage} from '../../entity/resultmessage';

@Injectable()
export class PublishShowService {

  venueId: number;

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  private publishShowUrl = 'http://localhost:8080/show/publishShow';


  constructor(private http: Http, private router: Router) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  setVserId(venueId: number) {
    this.venueId = venueId;
  }

  getVserId() {
    return this.venueId;
  }


  publishShow(showJson: string, one: number, two: number, three: number): Promise<ResultMessage> {
    const data = new URLSearchParams();
    data.append('showJson', showJson);
    data.append('one', one + '');
    data.append('two', two + '');
    data.append('three', three + '');
    return this.http.post(this.publishShowUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as ResultMessage)
      .catch(this.handleError);
  }


}
