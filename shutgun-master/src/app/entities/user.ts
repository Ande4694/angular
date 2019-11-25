export class User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city: string;
  birthDate: Date;
  phoneNumber: number;
  driversLicense?: number;
  locationOfEducation: string;
}