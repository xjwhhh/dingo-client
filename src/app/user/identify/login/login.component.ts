import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {IdentifyService} from '../identify.service';
import {User} from '../../../entity/user';
import {AppService} from '../../../app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  constructor(private identifyService: IdentifyService, private router: Router,private appService: AppService) {
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
    // window.open('https://zhidao.baidu.com/question/449950170.html');
    if (user.id === -1) {
      alert('用户名或密码错误，或者该用户已被注销');
    } else if (user.id === -2) {
      alert('该用户已被取消资格');
    } else {
      alert('登录成功');
      this.identifyService.setUserId(user.id);
      // console.log(user);
      // console.log(user.confirmed);
      this.appService.setType('user');
      this.appService.setUserId(user.id);
      if (user.confirmed) {
        this.router.navigate(['/identify/userInfo/' + user.id + '/basicInfo']);
      } else {
        this.router.navigate(['/identify/emailConfirmation']);
      }

    }
  }

  gotoRegister() {
    this.router.navigate(['/identify/register']);
  }


}
