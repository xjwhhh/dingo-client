import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {IdentifyService} from '../identify.service';
import {User} from '../../../entity/user';
import {ResultMessage} from '../../../entity/resultmessage';


@Component({
  selector: 'app-email-confirmation',
  templateUrl: './emailConfirmation.component.html',
  styleUrls: ['./emailConfirmation.component.css'],
})
export class EmailConfirmationComponent implements OnInit {

  userId: number;
  user: User = new User();

  constructor(private identifyService: IdentifyService, private router: Router) {
  }

  ngOnInit() {
    console.log('3e344');
    this.userId = this.identifyService.getUserId();
    this.identifyService.getUserBasicInfo(this.userId).then(user => this.user = user);


  }


  emailConfirmation(emailAddress: string) {
    this.identifyService.emailConfirmation(this.userId, emailAddress).then(result => this.checkEmailConfirmationResult(result));
  }

  checkEmailConfirmationResult(result: ResultMessage) {
    if (result.toString() === 'SUCCESS') {
      alert('已向该邮箱发送验证邮件');
      this.router.navigate(['/identify/login']);
    } else {
      alert('发送邮件失败，请稍后重试');
    }
  }

}
