import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private appService: AppService, private router: Router) {
  }

  gotoShow(showType: string) {
    if (this.appService.getType() === 'user') {
      this.router.navigate(['/show/' + showType + '/' + this.appService.getUserId()]);
    }
    console.log('aa');
  }
}
