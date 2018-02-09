import {Seat} from './seat';

export class Venue {
  id: number;
  code: string;
  account: string;
  password: string;
  name: string;
  address: string;
  seatList: Seat[];
}
