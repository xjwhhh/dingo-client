import {VIPLevel} from './VIPLevel';

export class User {
  id: number;
  account: string;
  password: string;
  emailAddress: string;
  isConfirmed: boolean;
  name: string;
  level: string;
  balance: number;
  totalIntegral: number;
  currentIntegral: number;
  isCancelled: boolean;
}
