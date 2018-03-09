import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {VenueIdentifyService} from '../identify.service';
import {Venue} from '../../../entity/venue';


@Component({
  selector: 'app-venue-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class VenueLoginComponent implements OnInit {


  constructor(private identifyService: VenueIdentifyService, private router: Router) {
  }

  ngOnInit() {
    console.log('3e344');


  }


  login(account: string, password: string) {
    if (account === '') {
      alert('未输入用户名');
    } else if (password === '') {
      alert('未输入密码');
    } else {
      this.identifyService.login(account, password).then(venue => this.check(venue));
    }
  }

  check(venue: Venue) {
    if (venue.id == null) {
      alert('用户名或密码错误');
    } else {
      alert('登录成功');
    }
  }

  gotoRegister() {
    this.router.navigate(['/venueIdentify/register']);
  }


}
