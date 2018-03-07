import {VenueApplicationType} from './VenueApplicationType';

export class VenueApplication {
  id: number;
  venueId: number;
  venueApplicationType: VenueApplicationType;
  venueJson: string;
  isApproved: boolean;
  ticketmanagerId: number;
  approveTime: string;
}
