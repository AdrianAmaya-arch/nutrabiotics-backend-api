export type UserRole = 'admin' | 'doctor' | 'patient';

export interface User {
  id: string;
  email: string;
  password: string;
  role: UserRole;
  name: string;
}