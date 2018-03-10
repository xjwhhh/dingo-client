import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TicketManagerIdentifyService} from '../identify.service';
import {TicketManager} from '../../../entity/ticketmanager';


@Component({
  selector: 'app-ticket-manager-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class TicketManagerLoginComponent implements OnInit {


  constructor(private identifyService: TicketManagerIdentifyService, private router: Router) {
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
      // window.open('https://www.baidu.com');
      this.identifyService.login(account, password).then(ticketManager => this.check(ticketManager));
    }
  }

  check(ticketManager: TicketManager) {
    console.log(ticketManager);
    if (ticketManager.id == null) {
      alert('用户名或密码错误');
    } else {
      alert('登录成功');
      this.router.navigate(['/ticketManagerIdentify/userInfo', ticketManager.id]);
    }
  }

}
