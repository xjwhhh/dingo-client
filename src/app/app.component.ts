import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppService} from './app.service';
import {ShowService} from './user/show/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private appService: AppService, private router: Router, private showService: ShowService,
              private route: ActivatedRoute) {
  }

  gotoShow(showType: string) {
    if (this.appService.getType() === 'user') {
      this.showService.setUserId(this.appService.getUserId());
      this.showService.setShowTyep(showType);
      this.router.navigate(['/show/' + showType + '/' + this.appService.getUserId() + '/display']);
    }


    // this.showType = this.route.snapshot.params['type'];

    // console.log('aa');
  }
}
