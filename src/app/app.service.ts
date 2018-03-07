import {Injectable} from '@angular/core';

@Injectable()
export class AppService {

  userId: number;
  venueId: number;
  ticketManagerId: number;
  type: string;

  setUserId(userId: number) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }

  setVenueId(venueId: number) {
    this.venueId = venueId;
  }

  getvenueId() {
    return this.venueId;
  }

  setTicketManagerId(ticketManagerId: number) {
    this.ticketManagerId = ticketManagerId;
  }

  getTicketManagerId() {
    return this.ticketManagerId;
  }

  setType(type: string) {
    this.type = type;
  }

  getType() {
    return this.type;
  }


}
