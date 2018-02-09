import {Ticket} from './ticket';

export class Order {
  id: number;
  userId: number;
  venueId: number;
  showId: number;
  cost: number;
  orderTime: string;
  idPaid: boolean;
  payTime: string;
  isCancelled: boolean;
  cancelTime: string;
  ticketList: Ticket[];
}
