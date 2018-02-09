import {ShowType} from './showtype';
import {ProgressType} from './progresstype';
import {ShowSeat} from './showseat';

export class Show {
  id: number;
  showType: ShowType;
  name: string;
  description: string;
  time: string;
  veneuId: number;
  totalSeats: number;
  currentSeats: number;
  progressType: ProgressType;
  seatList: ShowSeat[];
}
