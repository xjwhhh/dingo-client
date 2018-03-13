import {Seat} from './seat';

export class ShowSeat extends Seat {
  id: number;
  seatId: number;
  level: string;
  description: string;
  showId: number;
  cost: number;
  orderId: number;
  isBooked: boolean;
}
