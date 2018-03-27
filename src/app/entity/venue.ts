import {Seat} from './seat';

export class Venue {
  id: number;
  code: string;
  account: string;
  password: string;
  name: string;
  address: string;
  onlineBalance: number;
  offlineBalance: number;
  seatList: Seat[];
}
