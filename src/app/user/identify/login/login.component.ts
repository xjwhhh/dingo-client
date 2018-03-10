import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {IdentifyService} from '../identify.service';
import {User} from '../../../entity/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  constructor(private identifyService: IdentifyService, private router: Router) {
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
      this.identifyService.login(account, password).then(user => this.check(user));
    }
  }

  check(user: User) {
    window.open('https://zhidao.baidu.com/question/449950170.html');
    if (user.id == null) {
      alert('用户名或密码错误');
    } else {
      alert('登录成功');
      this.router.navigate(['/identify/userInfo', user.id]);
    }
  }

  gotoRegister() {
    this.router.navigate(['/identify/register']);
  }


}
