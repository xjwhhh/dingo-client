import {ShowSeat} from './showseat';

export class Show {
  id: number;
  showType: string;
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  venueId: number;
  totalSeats: number;
  currentSeats: number;
  progressType: string;
  earning: number;
  seatList: ShowSeat[];
}
