import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IdentifyService} from '../../identify.service';
import {ResultMessage} from '../../../../entity/resultmessage';
import {User} from '../../../../entity/user';


@Component({
  selector: 'app-user-info-update-basic-info',
  templateUrl: './updateBasicInfo.component.html',
  styleUrls: ['./updateBasicInfo.component.css'],
})
export class UserUpdateBasicInfoComponent implements OnInit {

  userId: number;
  user: User = new User();

  constructor(private identifyService: IdentifyService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.userId = this.identifyService.getUserId();
    this.getVenueBasicInfo();
  }

  getVenueBasicInfo() {
    this.identifyService.getUserBasicInfo(this.userId).then(user => this.user = user);
  }

  doUpdate(name: string, newPassword: string, reNewPassword: string) {
    if (name === '') {
      alert('未输入昵称');
    } else if (newPassword === '') {
      alert('未输入新密码');
    } else if (reNewPassword === '') {
      alert('未输入确认密码');
    } else if (newPassword !== reNewPassword) {
      alert('两次输入的密码不一致');
    } else {
      this.user.name = name;
      this.user.password = newPassword;
      this.identifyService.updateBasicInfo(JSON.stringify(this.user)).then(result => this.checkUpdateResult(result));
    }
  }

  checkUpdateResult(result: ResultMessage) {
    if (result.toString() === 'SUCCESS') {
      alert('个人信息更新成功');
      this.router.navigate(['/identify/userInfo/' + this.userId + '/basicInfo']);
    } else {
      alert('个人信息更新失败，请稍后重试');
    }
  }

  emailConfirmation(emailAddress: string) {
    this.identifyService.emailConfirmation(this.userId, emailAddress).then(result => this.checkEmailConfirmationResult(result));
  }

  checkEmailConfirmationResult(result: ResultMessage) {
    if (result.toString() === 'SUCCESS') {
      alert('已向该邮箱发送验证邮件');
      this.router.navigate(['/identify/userInfo/' + this.userId + '/basicInfo']);
    } else {
      alert('发送邮件失败，请稍后重试');
    }
  }

}
