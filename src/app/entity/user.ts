import {VIPLevel} from './VIPLevel';

export class User {
    id: number;
    account: string;
    password: string;
    emailAddress: string;
    isConfirmed: boolean;
    name: string;
    level: VIPLevel;
    totalIntegral: number;
    currentIntegral: number;
    isCancelled: boolean;
}
