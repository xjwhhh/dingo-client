import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {IdentifyService} from '../identify.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './userInfo.component.html',
  styleUrls: ['./userInfo.component.css'],
})
export class UserInfoComponent implements OnInit {

  userId: number;

  constructor(private identifyService: IdentifyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.userId = this.identifyService.getUserId();
  }
}
