import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {User} from '../../../../entity/user';
import {IdentifyService} from '../../identify.service';


@Component({
  selector: 'app-user-info-basic-info',
  templateUrl: './basicInfo.component.html',
  styleUrls: ['./basicInfo.component.css'],
})
export class UserBasicInfoComponent implements OnInit {
  userId: number;
  user: User;

  constructor(private identifyService: IdentifyService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.userId = params['userId'];
    });
    // this.showType = this.route.snapshot.params['type'];
    console.log(this.userId);
    this.getUserBasicInfo();
  }

  getUserBasicInfo() {
    this.identifyService.getUserBasicInfo(this.userId).then(user => this.user = user);
  }
}
