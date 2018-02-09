import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {IdentifyService} from '../identify.service';
import {User} from '../../../entity/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  constructor(private router: Router, private identifyService: IdentifyService) {
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
      this.identifyService.register(account, password).then(user => this.check(user));
    }
  }

  gotoLogin() {
    this.router.navigate(['/identify/register']);
  }

  // 看是否创建成功
  check(user: User) {
    if (user.id == null) {
      alert('账号名已存在');
    } else {
      alert('注册成功');
    }
  }

}
