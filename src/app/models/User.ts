import { Company } from './Company';
import { Address } from './Address';

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
  expanded: boolean;

  constructor() {
    this.expanded = false;
  }
}
