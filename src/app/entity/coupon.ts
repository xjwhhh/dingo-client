import {User} from './user';

export class Coupon {
  id: number;
  user: User;
  type: number;
  description: string;
  isUsed: boolean;

}
