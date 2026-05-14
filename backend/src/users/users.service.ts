import { Injectable } from '@nestjs/common';
import { User } from './user.type';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      email: 'admin@test.com',
      password: bcrypt.hashSync('admin123', 10),
      role: 'admin',
      name: 'Admin User',
    },
    {
      id: '2',
      email: 'doctor@test.com',
      password: bcrypt.hashSync('doctor123', 10),
      role: 'doctor',
      name: 'Doctor User',
    },
    {
      id: '3',
      email: 'patient@test.com',
      password: bcrypt.hashSync('patient123', 10),
      role: 'patient',
      name: 'Patient User',
    },
  ];

  async findByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}