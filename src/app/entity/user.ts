import {VIPLevel} from './VIPLevel';
import {Coupon} from './coupon';

export class User {
  id: number;
  account: string;
  password: string;
  emailAddress: string;
  confirmed: boolean;
  name: string;
  level: string;
  balance: number;
  totalIntegral: number;
  currentIntegral: number;
  cancelled: boolean;
  couponList: Coupon[];
}
