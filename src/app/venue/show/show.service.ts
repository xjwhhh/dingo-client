import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {Show} from '../../entity/show';
import {ResultMessage} from '../../entity/resultmessage';
import {ProgressType} from '../../entity/progresstype';

@Injectable()
export class VenueShowService {

  venueId: number;

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  private getShowListUrl = 'http://localhost:8080/show';
  private getShowByTypeUrl = 'http://localhost:8080/show/getShowByType';
  private getShowByIdUrl = 'http://localhost:8080/show/getShowById';
  private publishShowUrl = 'http://localhost:8080/venue/publishShow';


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

  getShowById(showId: number): Promise<Show[]> {
    const data = new URLSearchParams();
    data.append('showId', showId + '');
    return this.http.post(this.getShowByIdUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Show[])
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


}
