import {Ticket} from './ticket';
import {OrderState} from './orderstate';

export class Order {
  id: number;
  userId: number;
  venueId: number;
  showId: number;
  cost: number;
  orderTime: string;
  ticketConfirmedTime: string;
  payTime: string;
  cancelTime: string;
  state: string;
  online: boolean;
  ticketList: Ticket[];
}
