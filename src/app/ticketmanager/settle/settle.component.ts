import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {ResultMessage} from '../../entity/resultmessage';
import {TicketManagerExamineService} from '../examine/examine.service';
import {VenueApplicationType} from '../../entity/VenueApplicationType';
import {TicketManagerSettleService} from './settle.service';


@Component({
  selector: 'app-ticket-manager-settle',
  templateUrl: './settle.component.html',
  styleUrls: ['./settle.component.css'],
})
export class TicketManagerSettleComponent implements OnInit {
  ngOnInit() {
  }

  constructor(private settleService: TicketManagerSettleService) {
  }
}
