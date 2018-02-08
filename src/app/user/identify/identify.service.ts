import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {ResultMessage} from 'app/entity/resultmessage';

@Injectable()
export class IdentifyService {

  constructor(private http: Http, private router: Router) {
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

	  private getUserSharesUrl = 'http://localhost:8080/user/register';

  doRegister(): Promise<ResultMessage> {
    return this.http.get(this.getUserSharesUrl)
      .toPromise()
      .then(response => console.log(response))
      .catch(this.handleError);
  }

}
