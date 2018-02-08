import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {IdentifyService} from 'app/user/identify/identify.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  

	  constructor(private identifyService: IdentifyService, private router: Router) {
  }

  ngOnInit() {
  	console.log("3e344");
  	this.identifyService.doRegister();
   

  }

  
}
