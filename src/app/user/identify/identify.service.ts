import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {User} from '../../entity/user';

@Injectable()
export class IdentifyService {

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  private registerUrl = 'http://localhost:8080/user/register';
  private loginUrl = 'http://localhost:8080/user/login';


  constructor(private http: Http, private router: Router) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  register(account: string, password: string): Promise<User> {
    const data = new URLSearchParams();
    data.append('account', account);
    data.append('password', password);
    return this.http.post(this.registerUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }


  login(account: string, password: string): Promise<User> {
    const data = new URLSearchParams();
    data.append('account', account);
    data.append('password', password);
    return this.http.post(this.loginUrl, data, this.options)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

}
