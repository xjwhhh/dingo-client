import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {TicketManagerIdentifyService} from '../identify.service';
import {User} from '../../../entity/user';
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
      this.identifyService.login(account, password).then(ticketManager => this.check(ticketManager));
    }
  }

  check(ticketManager: TicketManager) {
    if (ticketManager.id == null) {
      alert('用户名或密码错误');
    } else {
      alert('登录成功');
    }
  }

  gotoRegister() {
    this.router.navigate(['/identify/register']);
  }


}