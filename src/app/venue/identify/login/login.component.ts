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


  login(code: string, password: string) {
    if (code === '') {
      alert('未输入场馆编码');
    } else if (password === '') {
      alert('未输入密码');
    } else {
      this.identifyService.login(code, password).then(venue => this.check(venue));
    }
  }

  check(venue: Venue) {
    if (venue.id === -1) {
      alert('用户名或密码错误');
    } else {
      alert('登录成功');
      this.identifyService.setVenueId(venue.id);
      this.router.navigate(['/venueIdentify/userInfo', venue.id]);
    }
  }

  gotoRegister() {
    this.router.navigate(['/venueIdentify/register']);
  }


}
