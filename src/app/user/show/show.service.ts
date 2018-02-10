import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {User} from '../../entity/user';
import {Show} from '../../entity/show';

@Injectable()
export class ShowService {

  userId: number;

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  private getShowListUrl = 'http://localhost:8080/show';


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


  getShowList(showType: string): Promise<Show[]> {
    const data = new URLSearchParams();
    data.append('showType', showType);
    return this.http.post(this.getShowListUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as Show[])
      .catch(this.handleError);
  }


}
