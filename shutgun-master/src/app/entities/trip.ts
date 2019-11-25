import { User } from './user';

export class Trip {
  _id: string;
  origin: string
  destination: string;
  availableSeats: number;
  departureTime: Date;
  owner: User;
  
}