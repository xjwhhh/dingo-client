import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {VenueIdentifyService} from '../identify.service';
import {User} from '../../../entity/user';
import {ResultMessage} from '../../../entity/resultmessage';

@Component({
  selector: 'app-venue-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class VenueRegisterComponent {

  constructor(private router: Router, private identifyService: VenueIdentifyService) {
  }

  register(account: string, password: string, ensurePassword: string) {
    if (account === '') {
      alert('未输入用户名');
    } else if (password === '') {
      alert('未输入密码');
    } else if (ensurePassword === '') {
      alert('未输入确认密码');
    } else if (ensurePassword !== password) {
      alert('两次输入的密码不同');
    } else {
      this.identifyService.register(account, password).then(resultMessage => this.check(resultMessage));
    }
  }

  gotoLogin() {
    this.router.navigate(['/venueIdentify/login']);
  }

  // 看是否创建成功
  check(resultMessage: ResultMessage) {
    if (resultMessage === ResultMessage.FAIL) {
      alert('账号名已存在');
    } else {
      alert('注册成功');
    }
  }

}
